# QGIS Benchmark summary compare-filesize (20201030-164714)


compare the effect of different QGIS project file size in QGIS 3.10

_run completed in 03h 40m 01s_

_Sample size per configuration 785_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize_20201030-164714_plot.html)

## Summary
| name                                   | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-smallfile                      | Global  |                369.3 | +0.0%                        |         3468   | +0.0%                  |         10071.5 | +0.0%                   |         4723 |        14774 |           785 |            0 |     5002.2 |    4265.63 |     4064.5 |      38.4 |   24.5    |      12.5 |          0 |
| qgis310-bigfile                        | Global  |               2039.8 | +452.3%                      |        19954   | +475.4%                |         63834   | +533.8%                 |         6458 |        88427 |           785 |            0 |     8270.9 |    5478.87 |     4431.5 |      45.1 |   14.7    |      12.4 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000  | Global  |               2040   | +452.4%                      |        19960.3 | +475.6%                |         63068.5 | +526.2%                 |         7609 |        88126 |           785 |            0 |     8423.6 |    5566.9  |     4600.2 |      40.7 |   14.6    |      12.4 |          0 |
| qgis310-bigfile-maxlayer2000           | Global  |               2045.5 | +453.9%                      |        20018.3 | +477.2%                |         64409.5 | +539.5%                 |         7170 |        88555 |           785 |            0 |     8443.3 |    5597.33 |     4575.3 |      38   |   14.5667 |      12.3 |          0 |
| qgis310-bigfile-bigcache               | Global  |               2045.8 | +454.0%                      |        20020   | +477.3%                |         63421.5 | +529.7%                 |         7576 |        88539 |           785 |            0 |     8320.6 |    5539.47 |     4494.5 |      38.3 |   14.5667 |      12.4 |          0 |
| qgis310-bigfile-hugecache              | Global  |               2045.8 | +454.0%                      |        20015.4 | +477.1%                |         63491   | +530.4%                 |         9927 |        89286 |           785 |            0 |     8442.9 |    5572.43 |     4565.4 |      41.3 |   14.3667 |      12.4 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 | Global  |               2060.1 | +457.8%                      |        20161   | +481.3%                |         63925   | +534.7%                 |         7484 |        89446 |           785 |            0 |     8459   |    5556.3  |     4578.8 |      36.8 |   14.4667 |      12.4 |          0 |

## Aggregated
| name                                                  | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-bigfile > somap310_fix                        | somap_fix                |               2039.8 | +0.0%                        |        19954   | +0.0%                  |         63834   | +1.2%                   |         6458 |        88427 |           785 |            0 |     8270.9 |    5478.87 |     4431.5 |      45.1 |   14.7    |      12.4 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix  | somap_fix                |               2040   | +0.0%                        |        19960.3 | +0.0%                  |         63068.5 | +0.0%                   |         7609 |        88126 |           785 |            0 |     8423.6 |    5566.9  |     4600.2 |      40.7 |   14.6    |      12.4 |          0 |
| qgis310-bigfile-maxlayer2000 > somap310_fix           | somap_fix                |               2045.5 | +0.3%                        |        20018.3 | +0.3%                  |         64409.5 | +2.1%                   |         7170 |        88555 |           785 |            0 |     8443.3 |    5597.33 |     4575.3 |      38   |   14.5667 |      12.3 |          0 |
| qgis310-bigfile-bigcache > somap310_fix               | somap_fix                |               2045.8 | +0.3%                        |        20020   | +0.3%                  |         63421.5 | +0.6%                   |         7576 |        88539 |           785 |            0 |     8320.6 |    5539.47 |     4494.5 |      38.3 |   14.5667 |      12.4 |          0 |
| qgis310-bigfile-hugecache > somap310_fix              | somap_fix                |               2045.8 | +0.3%                        |        20015.4 | +0.3%                  |         63491   | +0.7%                   |         9927 |        89286 |           785 |            0 |     8442.9 |    5572.43 |     4565.4 |      41.3 |   14.3667 |      12.4 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix | somap_fix                |               2060.1 | +1.0%                        |        20161   | +1.0%                  |         63925   | +1.4%                   |         7484 |        89446 |           785 |            0 |     8459   |    5556.3  |     4578.8 |      36.8 |   14.4667 |      12.4 |          0 |
| qgis310-smallfile > somap310_grundplanav_farbig       | somap_grundplanav_farbig |                343.4 | +0.0%                        |         3357.6 | +0.0%                  |          4732   | +0.0%                   |         1949 |         7900 |           735 |            0 |     5002.2 |    4507.3  |     4076.3 |      38.1 |   20.2    |      12.5 |          0 |
| qgis310-smallfile > somap310_grundplanav_sw           | somap_grundplanav_sw     |                 18   | +0.0%                        |           93.8 | +0.0%                  |          4700   | +0.0%                   |         2528 |         6147 |            20 |            0 |     4419.9 |    4223.9  |     4153.9 |      35.5 |   20.4    |      13.5 |          0 |
| qgis310-smallfile > somap310_lk                       | somap_lk                 |                  7.9 | +0.0%                        |           16.6 | +0.0%                  |           639.5 | +0.0%                   |          246 |          727 |            30 |            0 |     4066.9 |    4065.7  |     4064.5 |      38.4 |   32.9    |      27.4 |          0 |

## Detail
| name                                                                                                                                                                                                              | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-bigfile > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile/somap310_fix/av_f_big.txt/dashboard/index.html)                                               | somap_fix > av_f_big.txt                |               1930.3 | +0.0%                        |        19157.8 | +0.0%                  |         26991   | +0.0%                   |           735 |            0 |          0 |      26065    |         2517 |        44560 |       29747.2 |       31872.6 |      42892.4  |     0.381971 |                70.7504 |           0.162584 |     8270.9 |     6067   |     4497.8 |      38.8 |      14.2 |      12.4 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)   | somap_fix > av_f_big.txt                |               1931   | +0.0%                        |        19169.9 | +0.1%                  |         27118   | +0.5%                   |           735 |            0 |          0 |      26081.5  |         3150 |        44955 |       29905   |       32232.2 |      43002.6  |     0.381759 |                70.7112 |           0.162494 |     8423.6 |     6183.3 |     4605.3 |      39   |      14.2 |      12.4 |
| [qgis310-bigfile-hugecache > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-hugecache/somap310_fix/av_f_big.txt/dashboard/index.html)                           | somap_fix > av_f_big.txt                |               1935.2 | +0.3%                        |        19211.4 | +0.3%                  |         27145   | +0.6%                   |           735 |            0 |          0 |      26137.9  |         3404 |        45259 |       29821.4 |       32116.6 |      42972.4  |     0.380908 |                70.5536 |           0.162131 |     8442.9 |     6157.8 |     4588.5 |      41.3 |      14.2 |      12.4 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)                     | somap_fix > av_f_big.txt                |               1935.7 | +0.3%                        |        19219.2 | +0.3%                  |         27005   | +0.1%                   |           735 |            0 |          0 |      26148.5  |         3145 |        44845 |       30135   |       31805   |      43303.2  |     0.380788 |                70.5315 |           0.16208  |     8443.3 |     6197.4 |     4614.1 |      38   |      14.2 |      12.3 |
| [qgis310-bigfile-bigcache > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-bigcache/somap310_fix/av_f_big.txt/dashboard/index.html)                             | somap_fix > av_f_big.txt                |               1936.5 | +0.3%                        |        19224.3 | +0.3%                  |         27179   | +0.7%                   |           735 |            0 |          0 |      26155.6  |         3046 |        44999 |       29973   |       32325.8 |      42857.8  |     0.380654 |                70.5068 |           0.162023 |     8320.6 |     6176.9 |     4554.4 |      37.6 |      14.2 |      12.4 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html) | somap_fix > av_f_big.txt                |               1949.6 | +1.0%                        |        19354.4 | +1.0%                  |         27193   | +0.7%                   |           735 |            0 |          0 |      26332.5  |         3077 |        44936 |       30188.6 |       32136.2 |      43263.6  |     0.378087 |                70.0318 |           0.160931 |     8459   |     6133.9 |     4586.3 |      36.8 |      14.2 |      12.4 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)         | somap_fix > av_sw.txt                   |                 54   | +0.0%                        |          370.7 | +0.0%                  |         19558.5 | +0.0%                   |            20 |            0 |          0 |      18535.3  |         2461 |        26530 |       26424.7 |       26524.8 |      26530    |     0.412388 |               200.834  |           0.168258 |     7331.5 |     5895.3 |     5748.2 |      37.9 |      14.9 |      12.5 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                                     | somap_fix > av_sw.txt                   |                 54.4 | +0.7%                        |          374.3 | +1.0%                  |         20499   | +4.8%                   |            20 |            0 |          0 |      18716.2  |         2028 |        26881 |       26812.5 |       26878.5 |      26881    |     0.408447 |               198.914  |           0.166649 |     7590.6 |     5878.6 |     5654   |      45.1 |      15   |      12.6 |
| [qgis310-bigfile-hugecache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-hugecache/somap310_fix/av_sw.txt/dashboard/index.html)                                 | somap_fix > av_sw.txt                   |                 54.5 | +0.9%                        |          375.4 | +1.3%                  |         19773   | +1.1%                   |            20 |            0 |          0 |      18771    |         4541 |        26860 |       26686   |       26851.8 |      26860    |     0.407756 |               198.578  |           0.166367 |     7552.4 |     5981.5 |     5772.9 |      33.4 |      14.7 |      12.4 |
| [qgis310-bigfile-bigcache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-bigcache/somap310_fix/av_sw.txt/dashboard/index.html)                                   | somap_fix > av_sw.txt                   |                 54.8 | +1.5%                        |          378.1 | +2.0%                  |         20041   | +2.5%                   |            20 |            0 |          0 |      18906    |         2644 |        26682 |       26537.6 |       26675   |      26682    |     0.405614 |               197.534  |           0.165494 |     7468   |     5891.7 |     5726.3 |      34.2 |      15.1 |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)       | somap_fix > av_sw.txt                   |                 54.9 | +1.7%                        |          382   | +3.0%                  |         20131   | +2.9%                   |            20 |            0 |          0 |      19098.8  |         2470 |        27423 |       27070.3 |       27405.5 |      27423    |     0.402552 |               196.044  |           0.164244 |     7688.9 |     5949   |     5748   |      34.9 |      15.1 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)                           | somap_fix > av_sw.txt                   |                 55   | +1.9%                        |          380.7 | +2.7%                  |         20994   | +7.3%                   |            20 |            0 |          0 |      19036.6  |         2045 |        27127 |       26815.7 |       27111.5 |      27127    |     0.403991 |               196.745  |           0.164832 |     7760.6 |     5997.5 |     5790.6 |      35.3 |      15.1 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > lk.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-bigcache/somap310_fix/lk.txt/dashboard/index.html)                                         | somap_fix > lk.txt                      |                 54.5 | +0.0%                        |          417.5 | +0.0%                  |         16201.5 | +0.0%                   |            30 |            0 |          0 |      13917.8  |         1886 |        16858 |       16665.4 |       16817.8 |      16858    |     0.607374 |                16.464  |           0.248367 |     4574.6 |     4549.8 |     4494.5 |      38.3 |      14.4 |      12.7 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)                                 | somap_fix > lk.txt                      |                 54.8 | +0.6%                        |          418.4 | +0.2%                  |         16410.5 | +1.3%                   |            30 |            0 |          0 |      13947    |         1980 |        16583 |       16513.8 |       16548.3 |      16583    |     0.6054   |                16.4105 |           0.24756  |     4622.6 |     4597.1 |     4575.3 |      34   |      14.4 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)               | somap_fix > lk.txt                      |                 55   | +0.9%                        |          419.6 | +0.5%                  |         16392   | +1.2%                   |            30 |            0 |          0 |      13988.3  |         1998 |        16641 |       16581.2 |       16616.8 |      16641    |     0.603391 |                16.356  |           0.246738 |     4645.8 |     4622.1 |     4600.2 |      40.7 |      14.7 |      12.5 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                                           | somap_fix > lk.txt                      |                 55.1 | +1.1%                        |          421.9 | +1.0%                  |         16344   | +0.9%                   |            30 |            0 |          0 |      14063.4  |         1913 |        16986 |       16900.7 |       16950.8 |      16986    |     0.600709 |                16.2833 |           0.245641 |     4515.6 |     4491   |     4431.5 |      41.5 |      14.9 |      12.8 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)             | somap_fix > lk.txt                      |                 55.6 | +2.0%                        |          424.6 | +1.7%                  |         16601   | +2.5%                   |            30 |            0 |          0 |      14155    |         1937 |        17087 |       17053.9 |       17071.6 |      17087    |     0.597253 |                16.1896 |           0.244228 |     4609.3 |     4586   |     4578.8 |      34.8 |      14.1 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > lk.txt](../results/details/compare-filesize/20201030-164714/qgis310-bigfile-hugecache/somap310_fix/lk.txt/dashboard/index.html)                                       | somap_fix > lk.txt                      |                 56.1 | +2.9%                        |          428.6 | +2.6%                  |         16573   | +2.3%                   |            30 |            0 |          0 |      14286.4  |         1982 |        17167 |       16976.7 |       17142.2 |      17167    |     0.591996 |                16.0471 |           0.242079 |     4607.4 |     4578   |     4565.4 |      39.9 |      14.2 |      12.5 |
| [qgis310-smallfile > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-filesize/20201030-164714/qgis310-smallfile/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)             | somap_grundplanav_farbig > av_f_big.txt |                343.4 | +0.0%                        |         3357.6 | +0.0%                  |          4732   | +0.0%                   |           735 |            0 |          0 |       4568.16 |         1949 |         7900 |        5744.6 |        6622.6 |       7482.64 |     2.17585  |               318.427  |           0.958011 |     5002.2 |     4507.3 |     4076.3 |      38.1 |      20.2 |      12.5 |
| [qgis310-smallfile > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201030-164714/qgis310-smallfile/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                           | somap_grundplanav_sw > av_sw.txt        |                 18   | +0.0%                        |           93.8 | +0.0%                  |          4700   | +0.0%                   |            20 |            0 |          0 |       4691.2  |         2528 |         6147 |        6036.3 |        6141.5 |       6147    |     1.61005  |               500.962  |           0.674207 |     4419.9 |     4223.9 |     4153.9 |      35.5 |      20.4 |      13.5 |
| [qgis310-smallfile > somap310_lk > lk.txt](../results/details/compare-filesize/20201030-164714/qgis310-smallfile/somap310_lk/lk.txt/dashboard/index.html)                                                         | somap_lk > lk.txt                       |                  7.9 | +0.0%                        |           16.6 | +0.0%                  |           639.5 | +0.0%                   |            30 |            0 |          0 |        552.6  |          246 |          727 |         711.2 |         725.9 |        727    |    12.987    |               352.037  |           5.29796  |     4066.9 |     4065.7 |     4064.5 |      38.4 |      32.9 |      27.4 |

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
description: 'compare the effect of different QGIS project file size in QGIS 3.10'

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
description: compare the effect of different QGIS project file size in QGIS 3.10
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