import { Box } from '@mui/material'
import { useContext, useState, useEffect, SyntheticEvent } from 'react'

import BoxHeader from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'
import Kpi from '@/components/kpi/Kpi'
import KpiChart from '@/components/kpi/KpiChart'

import { KpisBoxProps, KpiProps } from '@/types/types'
import { kpisBoxes, optionalKpis } from '@/data/data'
import TimeFrameContext from '@/contexts/TimeFrameContext'
import OptionalKpisAccordion from './OptionalKpisAccordion'
// import { useDeviationScore } from '@/contexts/DeviationScoreContext'

const TargetKpisBoxes = () => {
  // const { data: deviationData } = useDeviationScore()
  // const { patientKpisData } = useKpisData()
  const { selectedFrameLabel } = useContext(TimeFrameContext)

  const [kpiCharts, setKpiVisibleCharts] = useState<KpiProps[]>([])
  const [kpiList, setKpiList] = useState<KpisBoxProps[]>(kpisBoxes)

  const [expanded, setExpanded] = useState<string | false>(false)

  const handleKpiClick = (selectedKpi: KpiProps, box: KpisBoxProps) => () => {
    setKpiVisibleCharts( prevCharts => {
      const chartIndex = prevCharts.findIndex((chart) => chart.variable === selectedKpi.variable)

      // chart is already visible, remove it from the list
      return chartIndex !== -1 ? prevCharts.filter((_, index) => index !== chartIndex) 
      // chart is not visible, add it to the list
      : [...prevCharts, 
        { variable: selectedKpi.variable,
          continueData: selectedKpi.continueData, 
          targetThreshold: selectedKpi.targetThreshold, 
          boxCategory: box.category } as KpiProps
        ]
    })
  }

  const handleChange = (box: string) => (e: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? box : false)
  }


  const handleKpiChipClick = (selectedKpi: KpiProps, box: KpisBoxProps) => () => {
    setKpiList( prevKpiList => {
      const updatedKpiList = prevKpiList.map(prevBox =>
        prevBox.category === box.category
          ? {
              ...prevBox,
              kpis: prevBox.kpis.map(prevKpi =>
                prevKpi.variable === selectedKpi.variable ? { ...prevKpi, display: !prevKpi.display } : prevKpi
              ),
            }
          : prevBox
      )
      return updatedKpiList
    })
  }

  useEffect(() => {
    setKpiList(kpisBoxes)
  }, [selectedFrameLabel])

  useEffect(() => {
    setKpiVisibleCharts(kpiCharts)
  }, [kpiCharts, kpiCharts.length])

  return (
    <>
    {kpiList.map((box, index) => (
        <Box key={index} sx={{ display: 'inline-flex', flexGrow: 1, flexDirection: 'column'}}>
          <DashboardBox
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: "374px",
              flexGrow: 1,
              gap: 1,

              alignItems: 'center',
              margin: '0.5rem',
              justifyContent: 'space-between',
            }}
          >
            <BoxHeader title={box.category}/>
          {/* DISPLAYED KPIS */}
          {box.kpis.map((kpi, index) => kpi.display && 
          (
            <Kpi key={index} variable={kpi.variable} onClick={handleKpiClick(kpi, box)} targetData={kpi.targetData} targetThreshold={kpi.targetThreshold} timeFrame={parseInt(selectedFrameLabel)} /> 
          )
          )}
          {/* OPTIONAL KPIS */}
          {box.optional && (
            <OptionalKpisAccordion
              expanded={expanded}
              box={box}
              handleChange={handleChange}
              optionalKpis={optionalKpis}
              handleKpiChipClick={handleKpiChipClick}
            />)}
        </DashboardBox>
        <DashboardBox key={box.category}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            gap: 1,

            alignItems: 'center',
            margin: '0.5rem',
            justifyContent: 'space-between',
          }}>
          {kpiCharts.map((kpi, index) => (kpi.boxCategory === box.category) && (<KpiChart key={index} variable={kpi.variable} continueData={kpi.continueData} targetThreshold={kpi.targetThreshold} timeFrame={kpi.timeFrame}/>))}
        </DashboardBox>
        </Box>
      ))}
    </>
  )
}

export default TargetKpisBoxes


