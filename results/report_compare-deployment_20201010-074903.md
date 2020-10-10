# QGIS Benchmark summary compare-deployment (20201010-074903)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 7201.66s_

## Summary
| name                               |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance |      9528.86 |        0    |         11198 |            1 |     9396.7 |    4990.2  |      99.1 |   73.3667 |       0.01 |
| qgis310-unlimited-threads          |     15178.2  |       59.29 |         11198 |            1 |     8853.6 |    4467.03 |      77.7 |   46.3333 |       0.01 |
| qgis310-balanced                   |     15675    |       64.5  |         11198 |            1 |     8495.3 |    4405.97 |      78   |   42.5    |       0.01 |
| qgis310-multithread-singleinstance |     44779.5  |      369.94 |         11198 |            1 |     8207.1 |    3779.43 |      40   |   16.0333 |       0.01 |

## Aggregated
| name                                                             |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig |       921.87 |        0    |           735 |            0 |     5012   |     4133.4 |      99.1 |      73.5 |       0    |
| qgis310-unlimited-threads > somap310_grundplanav_farbig          |      1315.2  |       42.67 |           735 |            0 |     4055.3 |     3403.7 |      77.7 |      50   |       0    |
| qgis310-balanced > somap310_grundplanav_farbig                   |      1355.17 |       47    |           735 |            0 |     3827.5 |     3416.6 |      78   |      44.1 |       0    |
| qgis310-singlethread-multiinstance > somap310_lk                 |      2247.27 |      143.77 |          5272 |            0 |     5056.2 |     3549.1 |      84.3 |      73   |       0    |
| qgis310-unlimited-threads > somap310_lk                          |      3640.22 |      294.87 |          5272 |            0 |     4288.9 |     3289.3 |      65.6 |      44.8 |       0    |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig |      3782.78 |      310.34 |           735 |            0 |     3069.7 |     2625.2 |      34.7 |      17.5 |       0    |
| qgis310-balanced > somap310_lk                                   |      3891.17 |      322.1  |          5272 |            0 |     4303.6 |     3143.2 |      72.3 |      41.9 |       0    |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     |      6359.72 |      589.87 |          5191 |            1 |     9396.7 |     7288.1 |      94.8 |      73.6 |       0.02 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              |     10222.8  |     1008.92 |          5191 |            1 |     8853.6 |     6708.1 |      63.1 |      44.2 |       0.02 |
| qgis310-balanced > somap310_grundplanav_sw                       |     10428.6  |     1031.25 |          5191 |            1 |     8495.3 |     6658.1 |      76   |      41.5 |       0.02 |
| qgis310-multithread-singleinstance > somap310_lk                 |     10835.8  |     1075.42 |          5272 |            0 |     3919.9 |     2893.4 |      40   |      15.6 |       0    |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     |     30160.9  |     3171.71 |          5191 |            1 |     8207.1 |     5819.7 |      36.8 |      15   |       0.02 |

## Detail
| name                                                                                                                                                                                                                                      |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201010-074903/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |       921.87 |        0    |           735 |            0 |  0         |      1254.24  |            1166 |          382 |         4145 |        1882.6 |       2131.4  |       3211.24 |      9.44742 |               1382.6   |           4.15963  |     5012   |     4133.4 |     2665.9 |      99.1 |      73.5 |      27.4 |
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201010-074903/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   |      1315.2  |       42.67 |           735 |            0 |  0         |      1789.39  |            1757 |          567 |         4661 |        2455.8 |       2752.2  |       3873.52 |      6.63747 |                971.372 |           2.92243  |     4055.3 |     3403.7 |     2531.7 |      77.7 |      50   |      26   |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201010-074903/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     |      1355.17 |       47    |           735 |            0 |  0         |      1843.77  |            1815 |          580 |         4928 |        2531.4 |       2848    |       3790.28 |      6.42488 |                940.263 |           2.82883  |     3827.5 |     3416.6 |     2330.3 |      78   |      44.1 |      25.8 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201010-074903/qgis310-singlethread-multiinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     |      2247.27 |      143.77 |          5272 |            0 |  0         |       426.266 |             251 |           29 |         3664 |        1032.1 |       1325.7  |       2134.21 |     27.824   |               1327.07  |          14.095    |     5056.2 |     3549.1 |     2312.5 |      84.3 |      73   |      13.5 |
| [qgis310-unlimited-threads > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201010-074903/qgis310-unlimited-threads/somap310_lk/lk_big.txt/dashboard/index.html)                                                       |      3640.22 |      294.87 |          5272 |            0 |  0         |       690.481 |             534 |           64 |         4775 |        1453.7 |       1828.7  |       2956.89 |     17.2387  |                822.275 |           8.73272  |     4288.9 |     3289.3 |     2146.6 |      65.6 |      44.8 |      11.2 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201010-074903/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |      3782.78 |      310.34 |           735 |            0 |  0         |      5146.65  |            5312 |         2295 |         8390 |        6538.4 |       7414.2  |       7936.28 |      2.31455 |                338.727 |           1.01908  |     3069.7 |     2625.2 |     2141.7 |      34.7 |      17.5 |      12.5 |
| [qgis310-balanced > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201010-074903/qgis310-balanced/somap310_lk/lk_big.txt/dashboard/index.html)                                                                         |      3891.17 |      322.1  |          5272 |            0 |  0         |       738.083 |             577 |           59 |         4894 |        1580.7 |       1952.75 |       3049.62 |     16.1104  |                768.409 |           8.16114  |     4303.6 |     3143.2 |     2217.3 |      72.3 |      41.9 |      11.1 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201010-074903/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       |      6359.72 |      589.87 |          5191 |            1 |  0.0192641 |      1225.14  |            1095 |          208 |         6860 |        2107   |       2547.4  |       3709.96 |      9.74347 |               2636.56  |           4.24348  |     9396.7 |     7288.1 |     3733.8 |      94.8 |      73.6 |      14   |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201010-074903/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                         |     10222.8  |     1008.92 |          5191 |            1 |  0.0192641 |      1969.33  |            1839 |          607 |        10075 |        3083.8 |       3583    |       5092.16 |      6.06989 |               1642.48  |           2.64356  |     8853.6 |     6708.1 |     3197.7 |      63.1 |      44.2 |      24.6 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201010-074903/qgis310-balanced/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                                           |     10428.6  |     1031.25 |          5191 |            1 |  0.0192641 |      2008.98  |            1871 |          700 |        10211 |        3149.8 |       3616.2  |       5324.6  |      5.95124 |               1610.36  |           2.59188  |     8495.3 |     6658.1 |     3160.8 |      76   |      41.5 |      24.8 |
| [qgis310-multithread-singleinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201010-074903/qgis310-multithread-singleinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     |     10835.8  |     1075.42 |          5272 |            0 |  0         |      2055.35  |            1515 |          144 |        12730 |        4043.1 |       4983.5  |       7739.31 |      5.799   |                276.601 |           2.93764  |     3919.9 |     2893.4 |     2055.4 |      40   |      15.6 |      10.4 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201010-074903/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       |     30160.9  |     3171.71 |          5191 |            1 |  0.0192641 |      5810.23  |            5705 |         2083 |        22461 |        8306.6 |       9526.6  |      12793.6  |      2.06234 |                558.059 |           0.898191 |     8207.1 |     5819.7 |     2310.3 |      36.8 |      15   |      12.4 |

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

  qgis310-unlimited-threads:
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
  qgis310-unlimited-threads:
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

```