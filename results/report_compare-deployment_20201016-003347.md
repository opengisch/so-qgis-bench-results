# QGIS Benchmark summary compare-deployment (20201016-003347)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 02h 01m 12s_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment_20201016-003347_plot.html)

## Summary
| name                               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance | Global  |       9555.4 |               0   |         11187 |            0 |     9226.4 |    5256.93 |     2878.3 |      95   |   73.8333 |      13.9 |          0 |
| qgis310-balanced-unlimited-threads | Global  |      15195.5 |              59   |         11187 |            0 |     8444.3 |    4954    |     2655.2 |      70.9 |   45.5667 |      11.2 |          0 |
| qgis310-balanced                   | Global  |      16511.2 |              72.8 |         11187 |            0 |     8320.9 |    4570.23 |     2579.9 |      73.2 |   44.1    |       9.7 |          0 |
| qgis310-multithread-singleinstance | Global  |      44760   |             368.4 |         11187 |            0 |     7576.9 |    4164.93 |     2446.9 |      39.4 |   16.3333 |       9.7 |          0 |

## Aggregated
| name                                                             | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        944.2 |               0   |           735 |            0 |     5302.1 |     4464.8 |     3091.4 |      94.5 |      73.6 |      25.3 |          0 |
| qgis310-balanced-unlimited-threads > somap310_grundplanav_farbig | somap_grundplanav_farbig |       1293.2 |              37   |           735 |            0 |     4600.4 |     4071.2 |     3010.8 |      70.9 |      48   |      25.1 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |       1514.2 |              60.4 |           735 |            0 |     4194.3 |     3610   |     2872.4 |      73.2 |      46.6 |      28   |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |       3762.8 |             298.5 |           735 |            0 |     3591.9 |     3117.1 |     2599.2 |      36.6 |      17.7 |      12.4 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |       6367.2 |               0   |          5190 |            0 |     9226.4 |     7302.4 |     4022.4 |      95   |      74.3 |      27.9 |          0 |
| qgis310-balanced-unlimited-threads > somap310_grundplanav_sw     | somap_grundplanav_sw     |      10212.5 |              60.4 |          5190 |            0 |     8444.3 |     6988.9 |     3879.5 |      70.5 |      43.1 |      27   |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |      11086.5 |              74.1 |          5190 |            0 |     8320.9 |     6472.4 |     3205.9 |      70.2 |      43   |      23.9 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |      30119.2 |             373   |          5190 |            0 |     7576.9 |     6025.5 |     2810.8 |      37.1 |      15.2 |      12.4 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |       2244.1 |               0   |          5262 |            0 |     5860   |     4003.6 |     2878.3 |      90.3 |      73.6 |      13.9 |          0 |
| qgis310-balanced-unlimited-threads > somap310_lk                 | somap_lk                 |       3689.8 |              64.4 |          5262 |            0 |     5312.4 |     3801.9 |     2655.2 |      62.8 |      45.6 |      11.2 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |       3910.5 |              74.3 |          5262 |            0 |     4960.2 |     3628.3 |     2579.9 |      72.4 |      42.7 |       9.7 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |      10878   |             384.7 |          5262 |            0 |     4805.5 |     3352.2 |     2446.9 |      39.4 |      16.1 |       9.7 |          0 |

## Detail
| name                                                                                                                                                                                                                                      | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201016-003347/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        944.2 |               0   |           735 |            0 |          0 |      1284.59  |          1214   |          356 |         3995 |        1891   |       2137.6  |       3324.96 |      9.21642 |               1348.8   |           4.05792  |     5302.1 |     4464.8 |     3091.4 |      94.5 |      73.6 |      25.3 |
| [qgis310-balanced-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201016-003347/qgis310-balanced-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |       1293.2 |              37   |           735 |            0 |          0 |      1759.49  |          1748   |          773 |         4811 |        2363.6 |       2792    |       4017.72 |      6.74318 |                986.842 |           2.96897  |     4600.4 |     4071.2 |     3010.8 |      70.9 |      48   |      25.1 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201016-003347/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |       1514.2 |              60.4 |           735 |            0 |          0 |      2060.17  |          2109   |          504 |         4309 |        2735.8 |       3026.2  |       4034.16 |      5.75297 |                841.928 |           2.53299  |     4194.3 |     3610   |     2872.4 |      73.2 |      46.6 |      28   |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201016-003347/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |       3762.8 |             298.5 |           735 |            0 |          0 |      5119.48  |          5287   |         2282 |         8296 |        6416.2 |       7300    |       7861.92 |      2.3263  |                340.447 |           1.02425  |     3591.9 |     3117.1 |     2599.2 |      36.6 |      17.7 |      12.4 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201016-003347/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |       6367.2 |               0   |          5190 |            0 |          0 |      1226.81  |          1112   |          199 |         8939 |        2121.9 |       2564.9  |       3519.45 |      9.73343 |               2634.35  |           4.23918  |     9226.4 |     7302.4 |     4022.4 |      95   |      74.3 |      27.9 |
| [qgis310-balanced-unlimited-threads > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201016-003347/qgis310-balanced-unlimited-threads/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |      10212.5 |              60.4 |          5190 |            0 |          0 |      1967.72  |          1818   |          592 |        10046 |        3110   |       3558.35 |       5105.62 |      6.07626 |               1644.52  |           2.64638  |     8444.3 |     6988.9 |     3879.5 |      70.5 |      43.1 |      27   |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201016-003347/qgis310-balanced/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                                           | somap_grundplanav_sw > av_sw_big.txt    |      11086.5 |              74.1 |          5190 |            0 |          0 |      2136.12  |          2009.5 |          567 |         9720 |        3307.7 |       3826.7  |       5390.63 |      5.59942 |               1515.48  |           2.4387   |     8320.9 |     6472.4 |     3205.9 |      70.2 |      43   |      23.9 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201016-003347/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |      30119.2 |             373   |          5190 |            0 |          0 |      5803.31  |          5692   |         2141 |        22419 |        8273.8 |       9452.35 |      12861.7  |      2.06465 |                558.771 |           0.899214 |     7576.9 |     6025.5 |     2810.8 |      37.1 |      15.2 |      12.4 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201016-003347/qgis310-singlethread-multiinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |       2244.1 |               0   |          5262 |            0 |          0 |       426.464 |           249   |           31 |         3537 |        1061   |       1386    |       2207.85 |     27.7922  |               1315.6   |          14.0782   |     5860   |     4003.6 |     2878.3 |      90.3 |      73.6 |      13.9 |
| [qgis310-balanced-unlimited-threads > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201016-003347/qgis310-balanced-unlimited-threads/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |       3689.8 |              64.4 |          5262 |            0 |          0 |       701.216 |           528.5 |           62 |         4931 |        1483   |       1864.85 |       2900.7  |     16.9647  |                803.052 |           8.59352  |     5312.4 |     3801.9 |     2655.2 |      62.8 |      45.6 |      11.2 |
| [qgis310-balanced > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201016-003347/qgis310-balanced/somap310_lk/lk_big.txt/dashboard/index.html)                                                                         | somap_lk > lk_big.txt                   |       3910.5 |              74.3 |          5262 |            0 |          0 |       743.155 |           566   |           38 |         4965 |        1607.4 |       2005.55 |       3000.07 |     15.9998  |                757.344 |           8.10476  |     4960.2 |     3628.3 |     2579.9 |      72.4 |      42.7 |       9.7 |
| [qgis310-multithread-singleinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201016-003347/qgis310-multithread-singleinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |      10878   |             384.7 |          5262 |            0 |          0 |      2067.27  |          1524.5 |          137 |        12724 |        4049.4 |       5021.85 |       7766.66 |      5.7659  |                272.922 |           2.92074  |     4805.5 |     3352.2 |     2446.9 |      39.4 |      16.1 |       9.7 |

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
description: 'compare different types of deployment for QGIS server 3.10 using the same settings'

test-cases:

  qgis310-singlethread-multiinstance:
    active: yes
    parallel-requests: 12
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_lk:
        - lk_big.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw_big.txt

  qgis310-multithread-singleinstance:
    inherit: qgis310-singlethread-multiinstance
    compose-variables:
      QGIS_REPLICAS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '6'

  qgis310-balanced:
    inherit: qgis310-singlethread-multiinstance
    compose-variables:
      QGIS_REPLICAS: '3'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '2'

  qgis310-balanced-unlimited-threads:
    inherit: qgis310-balanced
    compose-variables:
      QGIS_SERVER_MAX_THREADS: '-1'

```
### parsed test configurations

```
description: compare different types of deployment for QGIS server 3.10 using the
  same settings
test-cases:
  qgis310-balanced:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '3'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-singlethread-multiinstance
    parallel-requests: 12
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis310-balanced-unlimited-threads:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '3'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '-1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-balanced
    parallel-requests: 12
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis310-multithread-singleinstance:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-singlethread-multiinstance
    parallel-requests: 12
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis310-singlethread-multiinstance:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    parallel-requests: 12
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx

```