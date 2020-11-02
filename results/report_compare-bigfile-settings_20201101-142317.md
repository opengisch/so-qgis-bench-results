# QGIS Benchmark summary compare-bigfile-settings (20201101-142317)


compare the effect of different QGIS settings with big file size in QGIS 3.10

_run completed in 03h 42m 11s_

_Sample size per configuration 785_
## Summary plot
An interactive summary plot can be found [here](report_compare-bigfile-settings_20201101-142317_plot.html)

## Summary
| name                                   | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-smallfile                      | Global  |                369.1 | +0.0%                        |         3462.5 | +0.0%                  |          9946   | +0.0%                   |         4428 |        14555 |           785 |            0 |     5865.6 |    5040.63 |     4768.2 |      36.7 |   23.4    |      12.5 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000  | Global  |               2057.8 | +457.5%                      |        20131.3 | +481.4%                |         64005   | +543.5%                 |         7806 |        89566 |           785 |            0 |     9194.6 |    6311.8  |     5307.7 |      40   |   14.6333 |      12.3 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 | Global  |               2061.7 | +458.6%                      |        20177.6 | +482.7%                |         65139   | +554.9%                 |         7790 |        89610 |           785 |            0 |     9069.1 |    6333.13 |     5354.6 |      40.8 |   14.5333 |      12.4 |          0 |
| qgis310-bigfile-bigcache               | Global  |               2063.1 | +459.0%                      |        20189.8 | +483.1%                |         64678   | +550.3%                 |         7750 |        90255 |           785 |            0 |     9029.3 |    6240.73 |     5224.6 |      36.6 |   14.5    |      12.4 |          0 |
| qgis310-bigfile-maxlayer2000           | Global  |               2063.4 | +459.0%                      |        20184.7 | +482.9%                |         64659   | +550.1%                 |         7861 |        90381 |           785 |            0 |     8983.9 |    6318.17 |     5333.3 |      42   |   14.4    |      12.4 |          0 |
| qgis310-bigfile-hugecache              | Global  |               2067.4 | +460.1%                      |        20223.1 | +484.1%                |         64319   | +546.7%                 |         9874 |        89080 |           785 |            0 |     9112.8 |    6294.03 |     5248.9 |      39.7 |   14.5667 |      12.4 |          0 |
| qgis310-bigfile                        | Global  |               2076.9 | +462.7%                      |        20325.2 | +487.0%                |         64603.5 | +549.5%                 |         7746 |        89405 |           785 |            0 |     8866.2 |    6244.9  |     5257.1 |      42.5 |   14.3333 |      12.4 |          0 |

## Aggregated
| name                                                  | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix  | somap_fix                |               2057.8 | +0.0%                        |        20131.3 | +0.0%                  |         64005   | +0.0%                   |         7806 |        89566 |           785 |            0 |     9194.6 |    6311.8  |     5307.7 |      40   |   14.6333 |      12.3 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix | somap_fix                |               2061.7 | +0.2%                        |        20177.6 | +0.2%                  |         65139   | +1.8%                   |         7790 |        89610 |           785 |            0 |     9069.1 |    6333.13 |     5354.6 |      40.8 |   14.5333 |      12.4 |          0 |
| qgis310-bigfile-bigcache > somap310_fix               | somap_fix                |               2063.1 | +0.3%                        |        20189.8 | +0.3%                  |         64678   | +1.1%                   |         7750 |        90255 |           785 |            0 |     9029.3 |    6240.73 |     5224.6 |      36.6 |   14.5    |      12.4 |          0 |
| qgis310-bigfile-maxlayer2000 > somap310_fix           | somap_fix                |               2063.4 | +0.3%                        |        20184.7 | +0.3%                  |         64659   | +1.0%                   |         7861 |        90381 |           785 |            0 |     8983.9 |    6318.17 |     5333.3 |      42   |   14.4    |      12.4 |          0 |
| qgis310-bigfile-hugecache > somap310_fix              | somap_fix                |               2067.4 | +0.5%                        |        20223.1 | +0.5%                  |         64319   | +0.5%                   |         9874 |        89080 |           785 |            0 |     9112.8 |    6294.03 |     5248.9 |      39.7 |   14.5667 |      12.4 |          0 |
| qgis310-bigfile > somap310_fix                        | somap_fix                |               2076.9 | +0.9%                        |        20325.2 | +1.0%                  |         64603.5 | +0.9%                   |         7746 |        89405 |           785 |            0 |     8866.2 |    6244.9  |     5257.1 |      42.5 |   14.3333 |      12.4 |          0 |
| qgis310-smallfile > somap310_grundplanav_farbig       | somap_grundplanav_farbig |                342.9 | +0.0%                        |         3353.1 | +0.0%                  |          4715   | +0.0%                   |         1866 |         7610 |           735 |            0 |     5865.6 |    5293.5  |     4815.7 |      36.7 |   20.2    |      12.5 |          0 |
| qgis310-smallfile > somap310_grundplanav_sw           | somap_grundplanav_sw     |                 18.1 | +0.0%                        |           92   | +0.0%                  |          4568   | +0.0%                   |         2313 |         6144 |            20 |            0 |     5195.4 |    5016.6  |     4930.2 |      33.5 |   19.8    |      13   |          0 |
| qgis310-smallfile > somap310_lk                       | somap_lk                 |                  8.1 | +0.0%                        |           17.5 | +0.0%                  |           663   | +0.0%                   |          249 |          801 |            30 |            0 |     4834   |    4811.8  |     4768.2 |      35.5 |   30.2    |      21.3 |          0 |

## Detail
| name                                                                                                                                                                                                                      | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)   | somap_fix > av_f_big.txt                |               1946.9 | +0.0%                        |        19328   | +0.0%                  |         27324   | +0.2%                   |           735 |            0 |          0 |     26296.6   |         3258 |        45347 |       30013.8 |      32156.4  |      43104.4  |     0.378605 |                70.1267 |           0.161151 |     9194.6 |     6914.8 |     5307.7 |      40   |      14.2 |      12.3 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)                     | somap_fix > av_f_big.txt                |               1951.1 | +0.2%                        |        19368.8 | +0.2%                  |         27365   | +0.3%                   |           735 |            0 |          0 |     26352     |         3246 |        45503 |       30175.2 |      32663.6  |      43345.9  |     0.377798 |                69.9782 |           0.160808 |     8983.9 |     6916.2 |     5353.4 |      42   |      14.2 |      12.4 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html) | somap_fix > av_f_big.txt                |               1951.1 | +0.2%                        |        19370.1 | +0.2%                  |         27326   | +0.2%                   |           735 |            0 |          0 |     26353.8   |         3270 |        45563 |       29944   |      32781.4  |      43517.1  |     0.377815 |                69.981  |           0.160815 |     9069.1 |     6929.9 |     5376.3 |      36.3 |      14.3 |      12.4 |
| [qgis310-bigfile-bigcache > somap310_fix > av_f_big.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-bigcache/somap310_fix/av_f_big.txt/dashboard/index.html)                             | somap_fix > av_f_big.txt                |               1951.3 | +0.2%                        |        19373.4 | +0.2%                  |         27275   | +0.0%                   |           735 |            0 |          0 |     26358.4   |         3303 |        45277 |       30323   |      32480.2  |      43122.3  |     0.37771  |                69.9611 |           0.16077  |     9029.3 |     6847   |     5272.8 |      36.6 |      14.1 |      12.4 |
| [qgis310-bigfile-hugecache > somap310_fix > av_f_big.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-hugecache/somap310_fix/av_f_big.txt/dashboard/index.html)                           | somap_fix > av_f_big.txt                |               1955.8 | +0.5%                        |        19413.3 | +0.4%                  |         27395   | +0.4%                   |           735 |            0 |          0 |     26412.7   |         3286 |        44561 |       30348.4 |      32135.4  |      42920.6  |     0.376922 |                69.8153 |           0.160435 |     9112.8 |     6894.6 |     5323.3 |      39.7 |      14.2 |      12.4 |
| [qgis310-bigfile > somap310_fix > av_f_big.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile/somap310_fix/av_f_big.txt/dashboard/index.html)                                               | somap_fix > av_f_big.txt                |               1965.3 | +0.9%                        |        19510.7 | +0.9%                  |         27527   | +0.9%                   |           735 |            0 |          0 |     26545.1   |         3231 |        44980 |       30451.8 |      32442.8  |      43092.3  |     0.375078 |                69.4733 |           0.15965  |     8866.2 |     6820.9 |     5268.3 |      37.6 |      14.1 |      12.4 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)       | somap_fix > av_sw.txt                   |                 54.6 | +0.0%                        |          378.4 | +0.0%                  |         20996   | +4.4%                   |            20 |            0 |          0 |     18919.2   |         2536 |        26939 |       26691.1 |      26927    |      26939    |     0.405203 |               197.335  |           0.165326 |     8167.4 |     6705.3 |     6528   |      35.1 |      15.2 |      12.6 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                                     | somap_fix > av_sw.txt                   |                 55.1 | +0.9%                        |          381.5 | +0.8%                  |         20108.5 | +0.0%                   |            20 |            0 |          0 |     19076.8   |         2482 |        27229 |       27035.9 |      27219.3  |      27229    |     0.401808 |               195.681  |           0.163941 |     8477.8 |     6645.7 |     6433   |      36.3 |      14.8 |      12.4 |
| [qgis310-bigfile-hugecache > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-hugecache/somap310_fix/av_sw.txt/dashboard/index.html)                                 | somap_fix > av_sw.txt                   |                 55.4 | +1.5%                        |          382.6 | +1.1%                  |         20317   | +1.0%                   |            20 |            0 |          0 |     19130.9   |         4608 |        27137 |       26942.6 |      27127.6  |      27137    |     0.400729 |               195.156  |           0.163501 |     8517.1 |     6678.6 |     6488.7 |      36.5 |      15   |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)         | somap_fix > av_sw.txt                   |                 55.6 | +1.8%                        |          382.4 | +1.1%                  |         20175   | +0.3%                   |            20 |            0 |          0 |     19118.8   |         2567 |        27514 |       27464.7 |      27511.9  |      27514    |     0.399489 |               194.551  |           0.162994 |     8281.8 |     6673.8 |     6496.8 |      38   |      15.1 |      12.4 |
| [qgis310-bigfile-bigcache > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-bigcache/somap310_fix/av_sw.txt/dashboard/index.html)                                   | somap_fix > av_sw.txt                   |                 55.7 | +2.0%                        |          387.1 | +2.3%                  |         20609.5 | +2.5%                   |            20 |            0 |          0 |     19353     |         2454 |        27672 |       27515.3 |      27664.7  |      27672    |     0.396629 |               193.159  |           0.161828 |     8101.8 |     6597.1 |     6451.6 |      35.5 |      15   |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)                           | somap_fix > av_sw.txt                   |                 56.3 | +3.1%                        |          388.5 | +2.7%                  |         20579.5 | +2.3%                   |            20 |            0 |          0 |     19424.2   |         2633 |        27821 |       27710.8 |      27816.1  |      27821    |     0.393051 |               191.417  |           0.160368 |     8041.4 |     6695.5 |     6513   |      40.3 |      14.8 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)               | somap_fix > lk.txt                      |                 55.3 | +0.0%                        |          420.9 | +0.0%                  |         16506   | +0.0%                   |            30 |            0 |          0 |     14030     |         1981 |        16705 |       16686.5 |      16696.2  |      16705    |     0.601094 |                16.2938 |           0.245799 |     5371.3 |     5346.8 |     5325.2 |      34   |      14.6 |      12.6 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)                                 | somap_fix > lk.txt                      |                 56   | +1.3%                        |          427.5 | +1.6%                  |         16714.5 | +1.3%                   |            30 |            0 |          0 |     14250.3   |         1982 |        17057 |       16934.1 |      16998.2  |      17057    |     0.590098 |                15.9957 |           0.241303 |     5369.8 |     5342.8 |     5333.3 |      38   |      14.2 |      12.4 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)             | somap_fix > lk.txt                      |                 56   | +1.3%                        |          429.2 | +2.0%                  |         16817   | +1.9%                   |            30 |            0 |          0 |     14306.3   |         1984 |        17108 |       17004.7 |      17070    |      17108    |     0.590133 |                15.9966 |           0.241317 |     5385.2 |     5364.2 |     5354.6 |      40.8 |      14.1 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-bigcache/somap310_fix/lk.txt/dashboard/index.html)                                         | somap_fix > lk.txt                      |                 56.1 | +1.4%                        |          429.3 | +2.0%                  |         16793.5 | +1.7%                   |            30 |            0 |          0 |     14309.3   |         1993 |        17306 |       16993.9 |      17230.7  |      17306    |     0.592242 |                16.0538 |           0.242179 |     5301.5 |     5278.1 |     5224.6 |      36.3 |      14.4 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile-hugecache/somap310_fix/lk.txt/dashboard/index.html)                                       | somap_fix > lk.txt                      |                 56.2 | +1.6%                        |          427.2 | +1.5%                  |         16607   | +0.6%                   |            30 |            0 |          0 |     14240.2   |         1980 |        17382 |       17136.1 |      17286.3  |      17382    |     0.58975  |                15.9863 |           0.24116  |     5336.3 |     5308.9 |     5248.9 |      37   |      14.5 |      12.7 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                                           | somap_fix > lk.txt                      |                 56.5 | +2.2%                        |          433   | +2.9%                  |         16968   | +2.8%                   |            30 |            0 |          0 |     14434.8   |         2033 |        17196 |       17156.9 |      17185.5  |      17196    |     0.585606 |                15.8739 |           0.239466 |     5291.5 |     5268.1 |     5257.1 |      42.5 |      14.1 |      12.4 |
| [qgis310-smallfile > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-smallfile/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)             | somap_grundplanav_farbig > av_f_big.txt |                342.9 | +0.0%                        |         3353.1 | +0.0%                  |          4715   | +0.0%                   |           735 |            0 |          0 |      4561.98  |         1866 |         7610 |        5669.2 |       6614    |       7204.84 |     2.1785   |               318.819  |           0.959178 |     5865.6 |     5293.5 |     4815.7 |      36.7 |      20.2 |      12.5 |
| [qgis310-smallfile > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-smallfile/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                           | somap_grundplanav_sw > av_sw.txt        |                 18.1 | +0.0%                        |           92   | +0.0%                  |          4568   | +0.0%                   |            20 |            0 |          0 |      4597.55  |         2313 |         6144 |        6013.6 |       6137.55 |       6144    |     1.63212  |               507.83   |           0.68345  |     5195.4 |     5016.6 |     4930.2 |      33.5 |      19.8 |      13   |
| [qgis310-smallfile > somap310_lk > lk.txt](../results/details/compare-bigfile-settings/20201101-142317/qgis310-smallfile/somap310_lk/lk.txt/dashboard/index.html)                                                         | somap_lk > lk.txt                       |                  8.1 | +0.0%                        |           17.5 | +0.0%                  |           663   | +0.0%                   |            30 |            0 |          0 |       584.133 |          249 |          801 |         740.7 |        780.65 |        801    |    12.3153   |               333.828  |           5.02392  |     4834   |     4811.8 |     4768.2 |      35.5 |      30.2 |      21.3 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare the effect of different QGIS settings with big file size in QGIS 3.10'

test-cases:

  qgis310-bigfile:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_MAX_CACHE_LAYERS: '100'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_fix:
        - lk.txt
        - av_f_big.txt
        - av_sw.txt

  qgis310-bigfile-bigcache:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '200'

  qgis310-bigfile-hugecache:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '1000'

  qgis310-bigfile-maxlayer2000:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_MAX_CACHE_LAYERS: '2000'

  qgis310-bigfile-bigcache-maxlayer2000:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_MAX_CACHE_LAYERS: '2000'

  qgis310-bigfile-hugecache-maxlayer2000:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '1000'
      QGIS_MAX_CACHE_LAYERS: '2000'

  qgis310-smallfile:
    inherit: qgis310-bigfile
    projects:
      somap310_lk:
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw.txt

```
### parsed test configurations

```
description: compare the effect of different QGIS settings with big file size in QGIS
  3.10
test-cases:
  qgis310-bigfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-bigcache:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-bigcache-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-hugecache:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '1000'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-hugecache-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '1000'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-smallfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```