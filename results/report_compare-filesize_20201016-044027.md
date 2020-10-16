# QGIS Benchmark summary compare-filesize (20201016-044027)


compare the effect of different QGIS project file size in QGIS 3.10

_run completed in 03h 28m 51s_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize_20201016-044027_plot.html)

## Summary
| name                                   | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-smallfile                      | Global  |       3438.8 |               0   |           785 |            0 |     3615.1 |    2781.93 |     2537.6 |      41.1 |   19.8667 |       7.4 |          0 |
| qgis310-bigfile                        | Global  |      19562.8 |             468.9 |           785 |            0 |     6926.9 |    4070.1  |     3076.7 |      43.9 |   14.1667 |      12.3 |          0 |
| qgis310-bigfile-bigcache               | Global  |      19599.1 |             469.9 |           785 |            0 |     7060   |    4097.3  |     3093.2 |      39.5 |   14.1667 |      12.3 |          0 |
| qgis310-bigfile-maxlayer2000           | Global  |      19835.5 |             476.8 |           785 |            0 |     7087.2 |    4140.6  |     3121.6 |      44   |   14.3333 |      12.3 |          0 |
| qgis310-bigfile-hugecache              | Global  |      19837.5 |             476.9 |           785 |            0 |     6842.3 |    4092.67 |     3101   |      33   |   14.2667 |      12.4 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 | Global  |      20077.9 |             483.9 |           785 |            0 |     6650.3 |    4088.8  |     3105.1 |      39.5 |   14.2    |      12.3 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000  | Global  |      20129.6 |             485.4 |           785 |            0 |     6744.2 |    4082.07 |     3093.6 |      41.1 |   14.1333 |      12.3 |          0 |

## Aggregated
| name                                                  | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-bigfile > somap310_fix                        | somap_fix                |      19562.8 |               0   |           785 |            0 |     6926.9 |    4070.1  |     3076.7 |      43.9 |   14.1667 |      12.3 |          0 |
| qgis310-bigfile-bigcache > somap310_fix               | somap_fix                |      19599.1 |               0.2 |           785 |            0 |     7060   |    4097.3  |     3093.2 |      39.5 |   14.1667 |      12.3 |          0 |
| qgis310-bigfile-maxlayer2000 > somap310_fix           | somap_fix                |      19835.5 |               1.4 |           785 |            0 |     7087.2 |    4140.6  |     3121.6 |      44   |   14.3333 |      12.3 |          0 |
| qgis310-bigfile-hugecache > somap310_fix              | somap_fix                |      19837.5 |               1.4 |           785 |            0 |     6842.3 |    4092.67 |     3101   |      33   |   14.2667 |      12.4 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix | somap_fix                |      20077.9 |               2.6 |           785 |            0 |     6650.3 |    4088.8  |     3105.1 |      39.5 |   14.2    |      12.3 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix  | somap_fix                |      20129.6 |               2.9 |           785 |            0 |     6744.2 |    4082.07 |     3093.6 |      41.1 |   14.1333 |      12.3 |          0 |
| qgis310-smallfile > somap310_grundplanav_farbig       | somap_grundplanav_farbig |       3329.2 |               0   |           735 |            0 |     3615.1 |    3029.3  |     2560.9 |      41.1 |   20      |      12.5 |          0 |
| qgis310-smallfile > somap310_grundplanav_sw           | somap_grundplanav_sw     |         91.8 |               0   |            20 |            0 |     2927.4 |    2734.6  |     2680.1 |      34   |   19      |      15.1 |          0 |
| qgis310-smallfile > somap310_lk                       | somap_lk                 |         17.8 |               0   |            30 |            0 |     2608.9 |    2581.9  |     2537.6 |      35.2 |   20.6    |       7.4 |          0 |

## Detail
| name                                                                                                                                                                                                              | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-bigfile > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile/somap310_fix/av_f_big.txt/dashboard/index.html)                                               | somap_fix > av_f_big.txt                |      18791.2 |               0   |           735 |            0 |          0 |      25566.3  |         26500   |         3132 |        43789 |       29133.4 |       31694   |      42253.4  |     0.389431 |                72.1322 |           0.165759 |     6926.9 |     4668   |     3088.5 |      30.3 |      14.1 |      12.3 |
| [qgis310-bigfile-bigcache > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-bigcache/somap310_fix/av_f_big.txt/dashboard/index.html)                             | somap_fix > av_f_big.txt                |      18806.6 |               0.1 |           735 |            0 |          0 |      25587.2  |         26522   |         3119 |        44606 |       29324.4 |       31324.2 |      42678.2  |     0.389115 |                72.0734 |           0.165625 |     7060   |     4686.2 |     3117.8 |      39.4 |      14.1 |      12.4 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)                     | somap_fix > av_f_big.txt                |      19048   |               1.4 |           735 |            0 |          0 |      25915.6  |         26965   |         3129 |        44369 |       29656.8 |       31368.6 |      42645.1  |     0.384151 |                71.1537 |           0.163512 |     7087.2 |     4755.4 |     3196.4 |      44   |      14.3 |      12.3 |
| [qgis310-bigfile-hugecache > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-hugecache/somap310_fix/av_f_big.txt/dashboard/index.html)                           | somap_fix > av_f_big.txt                |      19050.5 |               1.4 |           735 |            0 |          0 |      25919.1  |         26866   |         3230 |        43784 |       29616.8 |       31738.6 |      42254    |     0.384133 |                71.1505 |           0.163504 |     6842.3 |     4684.1 |     3139.5 |      32.4 |      14.1 |      12.4 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html) | somap_fix > av_f_big.txt                |      19277   |               2.6 |           735 |            0 |          0 |      26227.3  |         27196   |         3206 |        45194 |       29792.6 |       32037.6 |      43087.2  |     0.379616 |                70.3137 |           0.161582 |     6650.3 |     4666.8 |     3110.4 |      36.3 |      14.1 |      12.3 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)   | somap_fix > av_f_big.txt                |      19326.6 |               2.8 |           735 |            0 |          0 |      26294.7  |         27274   |         3225 |        45505 |       30117.8 |       32037.6 |      43469.4  |     0.378642 |                70.1334 |           0.161167 |     6744.2 |     4661   |     3128.6 |      41.1 |      14.1 |      12.3 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                                     | somap_fix > av_sw.txt                   |        365.1 |               0   |            20 |            0 |          0 |      18255.2  |         19197   |         4569 |        25999 |       25939.4 |       25996.6 |      25999    |     0.418025 |               203.579  |           0.170558 |     6197.7 |     4454.1 |     4241.9 |      43.9 |      14.6 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)                           | somap_fix > av_sw.txt                   |        374.3 |               2.5 |            20 |            0 |          0 |      18713.6  |         20594.5 |         2207 |        26645 |       26626.9 |       26644.6 |      26645    |     0.409375 |               199.366  |           0.167028 |     6226.6 |     4514.7 |     4321.8 |      30.8 |      14.7 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-bigcache/somap310_fix/av_sw.txt/dashboard/index.html)                                   | somap_fix > av_sw.txt                   |        375.4 |               2.8 |            20 |            0 |          0 |      18771.8  |         19975.5 |         4470 |        26850 |       26512.2 |       26833.2 |      26850    |     0.409366 |               199.361  |           0.167025 |     6130   |     4497.6 |     4300.8 |      39.5 |      14.6 |      12.4 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)       | somap_fix > av_sw.txt                   |        376.2 |               3   |            20 |            0 |          0 |      18811.2  |         20093   |         2501 |        26590 |       26521.5 |       26587.3 |      26590    |     0.407365 |               198.387  |           0.166208 |     6317.5 |     4482.1 |     4248   |      38.7 |      14.6 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)         | somap_fix > av_sw.txt                   |        376.6 |               3.2 |            20 |            0 |          0 |      18831.1  |         19965   |         2586 |        26563 |       26497.2 |       26560.5 |      26563    |     0.406694 |               198.061  |           0.165934 |     6248.9 |     4473.6 |     4270.8 |      34.2 |      14.6 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-hugecache/somap310_fix/av_sw.txt/dashboard/index.html)                                 | somap_fix > av_sw.txt                   |        377.1 |               3.3 |            20 |            0 |          0 |      18855.8  |         19867.5 |         2575 |        27086 |       26974.2 |       27081.1 |      27086    |     0.404024 |               196.76   |           0.164845 |     6116.8 |     4473   |     4265.6 |      33   |      14.9 |      12.5 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                                           | somap_fix > lk.txt                      |        406.5 |               0   |            30 |            0 |          0 |      13548.4  |         15743.5 |         1918 |        16132 |       16101.5 |       16117.7 |      16132    |     0.625169 |                16.9458 |           0.255644 |     3114.5 |     3088.2 |     3076.7 |      33.7 |      13.8 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > lk.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-hugecache/somap310_fix/lk.txt/dashboard/index.html)                                       | somap_fix > lk.txt                      |        409.9 |               0.8 |            30 |            0 |          0 |      13663.3  |         15995.5 |         2013 |        16158 |       16135.8 |       16147.5 |      16158    |     0.618914 |                16.7762 |           0.253086 |     3144.2 |     3120.9 |     3101   |      25.3 |      13.8 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)                                 | somap_fix > lk.txt                      |        413.3 |               1.7 |            30 |            0 |          0 |      13776.6  |         16080   |         1962 |        16503 |       16415.7 |       16469.5 |      16503    |     0.610563 |                16.5498 |           0.249671 |     3173.5 |     3151.7 |     3121.6 |      33.4 |      14   |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > lk.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-bigcache/somap310_fix/lk.txt/dashboard/index.html)                                         | somap_fix > lk.txt                      |        417.1 |               2.6 |            30 |            0 |          0 |      13903.7  |         16260.5 |         2062 |        16800 |       16758.9 |       16792.3 |      16800    |     0.605119 |                16.4023 |           0.247445 |     3132.6 |     3108.1 |     3093.2 |      33.5 |      13.8 |      12.3 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)             | somap_fix > lk.txt                      |        424.7 |               4.5 |            30 |            0 |          0 |      14156.1  |         16434   |         1935 |        17013 |       16965.6 |       17003.7 |      17013    |     0.597931 |                16.2074 |           0.244506 |     3139.4 |     3117.5 |     3105.1 |      39.5 |      13.9 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201016-044027/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)               | somap_fix > lk.txt                      |        426.4 |               4.9 |            30 |            0 |          0 |      14214.7  |         16412.5 |         1952 |        17132 |       16889.7 |       17077.5 |      17132    |     0.594955 |                16.1268 |           0.243288 |     3138.3 |     3111.6 |     3093.6 |      33.8 |      13.7 |      12.5 |
| [qgis310-smallfile > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-filesize/20201016-044027/qgis310-smallfile/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)             | somap_grundplanav_farbig > av_f_big.txt |       3329.2 |               0   |           735 |            0 |          0 |       4529.57 |          4668   |         1971 |         7775 |        5675   |        6590.2 |       7379.52 |     2.19438  |               321.144  |           0.966168 |     3615.1 |     3029.3 |     2560.9 |      41.1 |      20   |      12.5 |
| [qgis310-smallfile > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201016-044027/qgis310-smallfile/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                           | somap_grundplanav_sw > av_sw.txt        |         91.8 |               0   |            20 |            0 |          0 |       4587.75 |          4578   |         3123 |         6019 |        5909.9 |        6013.6 |       6019    |     1.64636  |               512.262  |           0.689414 |     2927.4 |     2734.6 |     2680.1 |      34   |      19   |      15.1 |
| [qgis310-smallfile > somap310_lk > lk.txt](../results/details/compare-filesize/20201016-044027/qgis310-smallfile/somap310_lk/lk.txt/dashboard/index.html)                                                         | somap_lk > lk.txt                       |         17.8 |               0   |            30 |            0 |          0 |        594.7  |           684   |          267 |          746 |         732.8 |         742.7 |        746    |    12.4327   |               336.998  |           5.07181  |     2608.9 |     2581.9 |     2537.6 |      35.2 |      20.6 |       7.4 |

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