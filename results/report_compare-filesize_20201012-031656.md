# QGIS Benchmark summary compare-filesize (20201012-031656)


compare the effect of different QGIS project file size in QGIS 3.10

_run completed in 03h 30m 51s_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize_20201012-031656_plot.html)

## Summary
| name                                   | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|----------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-smallfile                      | Global  |       3614.8 |               0   |           785 |            0 |          0 |     3369.4 |    2541.4  |         0 |      38.6 |   19.4333 |          0 |
| qgis310-bigfile-maxlayer2000           | Global  |      19901.4 |             450.5 |           785 |            0 |          0 |     6400   |    3730.7  |         0 |      39.3 |   14.1    |          0 |
| qgis310-bigfile-hugecache              | Global  |      19935.6 |             451.5 |           785 |            0 |          0 |     6350.8 |    3743.53 |         0 |      36.8 |   14.0667 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000  | Global  |      19941.6 |             451.7 |           785 |            0 |          0 |     6275.3 |    3719.2  |         0 |      39.3 |   14.0333 |          0 |
| qgis310-bigfile-bigcache               | Global  |      19957.4 |             452.1 |           785 |            0 |          0 |     6550.6 |    3711.53 |         0 |      38.1 |   14.1333 |          0 |
| qgis310-bigfile                        | Global  |      20080.9 |             455.5 |           785 |            0 |          0 |     6365.3 |    3699.13 |         0 |      40.3 |   14.1333 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 | Global  |      20244.1 |             460   |           785 |            0 |          0 |     6291.6 |    3762.4  |         0 |      37.5 |   14.1667 |          0 |

## Aggregated
| name                                                  | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|-------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-bigfile-maxlayer2000 > somap310_fix           | somap_fix                |      19901.4 |               0   |           785 |            0 |          0 |     6400   |    3730.7  |         0 |      39.3 |   14.1    |          0 |
| qgis310-bigfile-hugecache > somap310_fix              | somap_fix                |      19935.6 |               0.2 |           785 |            0 |          0 |     6350.8 |    3743.53 |         0 |      36.8 |   14.0667 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix  | somap_fix                |      19941.6 |               0.2 |           785 |            0 |          0 |     6275.3 |    3719.2  |         0 |      39.3 |   14.0333 |          0 |
| qgis310-bigfile-bigcache > somap310_fix               | somap_fix                |      19957.4 |               0.3 |           785 |            0 |          0 |     6550.6 |    3711.53 |         0 |      38.1 |   14.1333 |          0 |
| qgis310-bigfile > somap310_fix                        | somap_fix                |      20080.9 |               0.9 |           785 |            0 |          0 |     6365.3 |    3699.13 |         0 |      40.3 |   14.1333 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix | somap_fix                |      20244.1 |               1.7 |           785 |            0 |          0 |     6291.6 |    3762.4  |         0 |      37.5 |   14.1667 |          0 |
| qgis310-smallfile > somap310_grundplanav_farbig       | somap_grundplanav_farbig |       3503.3 |               0   |           735 |            0 |          0 |     3369.4 |    2799.6  |         0 |      38.6 |   19.1    |          0 |
| qgis310-smallfile > somap310_grundplanav_sw           | somap_grundplanav_sw     |         94.4 |               0   |            20 |            0 |          0 |     2692   |    2489.2  |         0 |      28.2 |   18.6    |          0 |
| qgis310-smallfile > somap310_lk                       | somap_lk                 |         17.1 |               0   |            30 |            0 |          0 |     2363.5 |    2335.4  |         0 |      35.5 |   20.6    |          0 |

## Detail
| name                                                                                                                                                                                                              | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)                     | somap_fix > av_f_big.txt                |      19114.6 |               0   |           735 |            0 |          0 |     26006.3   |         27111   |         2949 |        44261 |       29928.4 |      32011.2  |      42431.4  |     0.382894 |                70.9207 |           0.162977 |     6400   |     4244   |     2852.4 |      32.8 |      14   |      12.4 |
| [qgis310-bigfile-hugecache > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-hugecache/somap310_fix/av_f_big.txt/dashboard/index.html)                           | somap_fix > av_f_big.txt                |      19142.5 |               0.1 |           735 |            0 |          0 |     26044.3   |         26971   |         3082 |        45270 |       30017   |      31650.6  |      42671.8  |     0.382281 |                70.8065 |           0.162716 |     6350.8 |     4289.6 |     2855.7 |      27.9 |      13.9 |      12.4 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)   | somap_fix > av_f_big.txt                |      19156.2 |               0.2 |           735 |            0 |          0 |     26062.8   |         27034   |         3145 |        44647 |       29895   |      31527    |      43115.4  |     0.381991 |                70.7538 |           0.162593 |     6275.3 |     4266   |     2856.6 |      27.3 |      13.9 |      12.4 |
| [qgis310-bigfile-bigcache > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-bigcache/somap310_fix/av_f_big.txt/dashboard/index.html)                             | somap_fix > av_f_big.txt                |      19163.6 |               0.3 |           735 |            0 |          0 |     26072.9   |         27079   |         3136 |        44416 |       30298.2 |      31737    |      42549.8  |     0.38191  |                70.7386 |           0.162558 |     6550.6 |     4249.8 |     2842.4 |      38.1 |      13.9 |      12.3 |
| [qgis310-bigfile > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile/somap310_fix/av_f_big.txt/dashboard/index.html)                                               | somap_fix > av_f_big.txt                |      19289.9 |               0.9 |           735 |            0 |          0 |     26244.8   |         27144   |         3161 |        44762 |       30070.8 |      32272.8  |      43279.1  |     0.379385 |                70.27   |           0.161483 |     6365.3 |     4245   |     2822.7 |      29.6 |      14   |      12.3 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html) | somap_fix > av_f_big.txt                |      19444.4 |               1.7 |           735 |            0 |          0 |     26454.9   |         27302   |         3123 |        44845 |       30516.6 |      32146.6  |      43070.4  |     0.376371 |                69.7131 |           0.1602   |     6291.6 |     4288.3 |     2872.7 |      31.3 |      14   |      12.3 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)                           | somap_fix > av_sw.txt                   |        374.8 |               0   |            20 |            0 |          0 |     18737.8   |         19937   |         2441 |        26658 |       26451.4 |      26647.8  |      26658    |     0.40945  |               199.402  |           0.167059 |     5695.6 |     4090.9 |     3863.1 |      39.3 |      14.5 |      12.6 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)         | somap_fix > av_sw.txt                   |        376   |               0.3 |            20 |            0 |          0 |     18799.8   |         19949   |         2427 |        27095 |       27074.6 |      27095    |      27095    |     0.405564 |               197.51   |           0.165473 |     5478.9 |     4024   |     3830.9 |      35.5 |      14.6 |      12.4 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                                     | somap_fix > av_sw.txt                   |        376.1 |               0.4 |            20 |            0 |          0 |     18806.5   |         19926.5 |         2481 |        26799 |       26752.4 |      26797.1  |      26799    |     0.407141 |               198.278  |           0.166117 |     5627.7 |     4029.2 |     3821.8 |      39.6 |      14.7 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-bigcache/somap310_fix/av_sw.txt/dashboard/index.html)                                   | somap_fix > av_sw.txt                   |        381.3 |               1.8 |            20 |            0 |          0 |     19066.7   |         19992.5 |         4508 |        27398 |       27189.8 |      27387.8  |      27398    |     0.402374 |               195.956  |           0.164172 |     5859   |     4051.9 |     3854.4 |      37.7 |      14.6 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-hugecache/somap310_fix/av_sw.txt/dashboard/index.html)                                 | somap_fix > av_sw.txt                   |        381.3 |               1.7 |            20 |            0 |          0 |     19063.4   |         20318   |         4574 |        27076 |       26758.8 |      27060.5  |      27076    |     0.403551 |               196.53   |           0.164652 |     5794   |     4092.9 |     3869.9 |      36.8 |      14.5 |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)       | somap_fix > av_sw.txt                   |        387.4 |               3.4 |            20 |            0 |          0 |     19369.5   |         20402.5 |         2504 |        28349 |       28205.6 |      28342.5  |      28349    |     0.393499 |               191.635  |           0.160551 |     5776   |     4113.4 |     3915.1 |      31.7 |      14.7 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)               | somap_fix > lk.txt                      |        409.5 |               0   |            30 |            0 |          0 |     13648.8   |         16000.5 |         1939 |        16285 |       16207   |      16257.5  |      16285    |     0.618136 |                16.7551 |           0.252768 |     2891.1 |     2867.6 |     2855.4 |      39.3 |      13.6 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > lk.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-hugecache/somap310_fix/lk.txt/dashboard/index.html)                                       | somap_fix > lk.txt                      |        411.8 |               0.6 |            30 |            0 |          0 |     13726.3   |         16084.5 |         1906 |        16655 |       16573.6 |      16642.9  |      16655    |     0.616244 |                16.7038 |           0.251994 |     2858.2 |     2848.1 |     2823.1 |      29.6 |      13.8 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)                                 | somap_fix > lk.txt                      |        412   |               0.6 |            30 |            0 |          0 |     13734.8   |         16081   |         1921 |        16273 |       16216.4 |      16254.3  |      16273    |     0.616168 |                16.7018 |           0.251963 |     2879.1 |     2857.2 |     2837.5 |      26.2 |      13.8 |      12.6 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)             | somap_fix > lk.txt                      |        412.3 |               0.7 |            30 |            0 |          0 |     13742.9   |         16081   |         1943 |        16430 |       16426.8 |      16430    |      16430    |     0.612407 |                16.5998 |           0.250425 |     2912.4 |     2885.5 |     2877.8 |      37.5 |      13.8 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > lk.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile-bigcache/somap310_fix/lk.txt/dashboard/index.html)                                         | somap_fix > lk.txt                      |        412.5 |               0.7 |            30 |            0 |          0 |     13750.2   |         16109.5 |         1902 |        16381 |       16353.8 |      16370.5  |      16381    |     0.614994 |                16.6699 |           0.251483 |     2859.2 |     2832.9 |     2818.5 |      35.2 |      13.9 |      12.5 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-filesize/20201012-031656/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                                           | somap_fix > lk.txt                      |        414.9 |               1.3 |            30 |            0 |          0 |     13828.9   |         16193.5 |         1947 |        16532 |       16422.5 |      16500.1  |      16532    |     0.608593 |                16.4964 |           0.248866 |     2846   |     2823.2 |     2813.4 |      40.3 |      13.7 |      12.6 |
| [qgis310-smallfile > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-filesize/20201012-031656/qgis310-smallfile/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)             | somap_grundplanav_farbig > av_f_big.txt |       3503.3 |               0   |           735 |            0 |          0 |      4766.38  |          5022   |         1844 |         7811 |        5914.6 |       6895.2  |       7425.04 |     2.08575  |               305.243  |           0.918339 |     3369.4 |     2799.6 |     2338.2 |      38.6 |      19.1 |      12.5 |
| [qgis310-smallfile > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201012-031656/qgis310-smallfile/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                           | somap_grundplanav_sw > av_sw.txt        |         94.4 |               0   |            20 |            0 |          0 |      4720.45  |          4746.5 |         2324 |         6150 |        6018   |       6143.45 |       6150    |     1.59706  |               496.921  |           0.668769 |     2692   |     2489.2 |     2427.4 |      28.2 |      18.6 |      12.5 |
| [qgis310-smallfile > somap310_lk > lk.txt](../results/details/compare-filesize/20201012-031656/qgis310-smallfile/somap310_lk/lk.txt/dashboard/index.html)                                                         | somap_lk > lk.txt                       |         17.1 |               0   |            30 |            0 |          0 |       571.567 |           665   |          232 |          757 |         743.5 |        757    |        757    |    12.5313   |               339.672  |           5.11206  |     2363.5 |     2335.4 |     2283.1 |      35.5 |      20.6 |       7.5 |

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
      QGIS_SERVER_MAX_THREADS: '4'
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
      QGIS_SERVER_MAX_THREADS: '4'
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
      QGIS_SERVER_MAX_THREADS: '4'
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
      QGIS_SERVER_MAX_THREADS: '4'
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
      QGIS_SERVER_MAX_THREADS: '4'
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
      QGIS_SERVER_MAX_THREADS: '4'
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
      QGIS_SERVER_MAX_THREADS: '4'
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
      QGIS_SERVER_MAX_THREADS: '4'
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