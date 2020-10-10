# QGIS Benchmark summary compare-deployment-sequential (20201010-074430)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 192.66000000000003s_

## Summary
| name                               |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-multithread-singleinstance |        27.59 |        0    |            72 |            0 |     2380.9 |    2124.37 |      31.8 |   20      |          0 |
| qgis310-unlimited-threads          |        27.78 |        0.69 |            72 |            0 |     2524.2 |    2271.07 |      33.2 |   19.2333 |          0 |
| qgis310-balanced                   |        31.83 |       15.37 |            72 |            0 |     2509.8 |    2264.7  |      30.4 |   16.5    |          0 |
| qgis310-singlethread-multiinstance |        37.26 |       35.05 |            72 |            0 |     2666.7 |    2412.3  |      25.6 |   15.6    |          0 |

## Aggregated
| name                                                             |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-multithread-singleinstance > somap310_lk                 |         2.48 |        0    |            30 |            0 |     2064.8 |     2053.1 |      30.5 |      19.5 |          0 |
| qgis310-unlimited-threads > somap310_lk                          |         2.57 |        3.63 |            30 |            0 |     2197.5 |     2186.7 |      22.1 |      16.6 |          0 |
| qgis310-balanced > somap310_lk                                   |         2.85 |       14.92 |            30 |            0 |     2193.9 |     2184.9 |      18.2 |      14.1 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 |         3.26 |       31.45 |            30 |            0 |     2337.2 |     2312.6 |      24.4 |      16.7 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              |        12.1  |      387.9  |            20 |            0 |     2415.9 |     2324.6 |      28.5 |      18.6 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     |        12.32 |      396.77 |            20 |            0 |     2198.7 |     2109.4 |      25.5 |      18.3 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig |        12.79 |      415.73 |            22 |            0 |     2380.9 |     2210.6 |      31.8 |      22.2 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_farbig          |        13.11 |      428.63 |            22 |            0 |     2524.2 |     2301.9 |      33.2 |      22.5 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       |        13.25 |      434.27 |            20 |            0 |     2509.8 |     2298.7 |      30.4 |      16.8 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     |        14.67 |      491.53 |            20 |            0 |     2666.7 |     2449.3 |      25.6 |      15.4 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   |        15.73 |      534.27 |            22 |            0 |     2505.6 |     2310.5 |      25.3 |      18.6 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig |        19.33 |      679.44 |            22 |            0 |     2650.6 |     2475   |      23.7 |      14.7 |          0 |

## Detail
| name                                                                                                                                                                                                                                         |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-multithread-singleinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201010-074430/qgis310-multithread-singleinstance/somap310_lk/lk.txt/dashboard/index.html)                                     |         2.48 |        0    |            30 |            0 |          0 |       82.5    |            78.5 |           52 |          225 |          86.9 |        153.5  |           225 |     11.9142  |                322.945 |           4.86032  |     2064.8 |     2053.1 |     2030.3 |      30.5 |      19.5 |       9.1 |
| [qgis310-unlimited-threads > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201010-074430/qgis310-unlimited-threads/somap310_lk/lk.txt/dashboard/index.html)                                                       |         2.57 |        3.63 |            30 |            0 |          0 |       85.7    |            79   |           51 |          279 |          94   |        178.35 |           279 |     11.4591  |                310.61  |           4.67467  |     2197.5 |     2186.7 |     2176   |      22.1 |      16.6 |      11.1 |
| [qgis310-balanced > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201010-074430/qgis310-balanced/somap310_lk/lk.txt/dashboard/index.html)                                                                         |         2.85 |       14.92 |            30 |            0 |          0 |       94.9667 |            90.5 |           52 |          264 |         100.9 |        177.65 |           264 |     10.3663  |                280.987 |           4.22885  |     2193.9 |     2184.9 |     2176   |      18.2 |      14.1 |       9.9 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201010-074430/qgis310-singlethread-multiinstance/somap310_lk/lk.txt/dashboard/index.html)                                     |         3.26 |       31.45 |            30 |            0 |          0 |      108.8    |           103   |           60 |          270 |         122.6 |        189.15 |           270 |      9.06071 |                245.598 |           3.69625  |     2337.2 |     2312.6 |     2269.1 |      24.4 |      16.7 |      13   |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201010-074430/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                         |        12.1  |      387.9  |            20 |            0 |          0 |      604.85   |           361.5 |          189 |         2403 |        1275.9 |       2347.05 |          2403 |      1.64609 |                512.175 |           0.6893   |     2415.9 |     2324.6 |     2284.6 |      28.5 |      18.6 |      15.1 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201010-074430/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       |        12.32 |      396.77 |            20 |            0 |          0 |      615.8    |           389   |          218 |         2217 |        1281.1 |       2170.9  |          2217 |      1.61681 |                503.067 |           0.677041 |     2198.7 |     2109.4 |     2091.3 |      25.5 |      18.3 |      15.1 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-deployment-sequential/20201010-074430/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) |        12.79 |      415.73 |            22 |            0 |          0 |      581.455  |           477.5 |          200 |         2474 |         738.8 |       2215.25 |          2474 |      1.71366 |                223.447 |           0.730254 |     2380.9 |     2210.6 |     2045.1 |      31.8 |      22.2 |      17.9 |
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-deployment-sequential/20201010-074430/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)                   |        13.11 |      428.63 |            22 |            0 |          0 |      595.818  |           476.5 |          195 |         2705 |         705.3 |       2405.9  |          2705 |      1.67262 |                218.095 |           0.712765 |     2524.2 |     2301.9 |     2185.4 |      33.2 |      22.5 |      17.4 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201010-074430/qgis310-balanced/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                           |        13.25 |      434.27 |            20 |            0 |          0 |      662.3    |           457.5 |          189 |         2517 |        1403.1 |       2461.95 |          2517 |      1.50376 |                467.891 |           0.629699 |     2509.8 |     2298.7 |     2243.1 |      30.4 |      16.8 |      13.9 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201010-074430/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       |        14.67 |      491.53 |            20 |            0 |          0 |      733.5    |           546.5 |          192 |         2379 |        1586.4 |       2339.95 |          2379 |      1.35823 |                422.611 |           0.568761 |     2666.7 |     2449.3 |     2360.3 |      25.6 |      15.4 |      12.4 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-deployment-sequential/20201010-074430/qgis310-balanced/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)                                     |        15.73 |      534.27 |            22 |            0 |          0 |      715.136  |           636.5 |          199 |         2811 |         859.8 |       2518.95 |          2811 |      1.39399 |                181.765 |           0.594031 |     2505.6 |     2310.5 |     2151   |      25.3 |      18.6 |      15.7 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-deployment-sequential/20201010-074430/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) |        19.33 |      679.44 |            22 |            0 |          0 |      878.727  |           763.5 |          174 |         3205 |        1097.9 |       2890.15 |          3205 |      1.1356  |                148.073 |           0.483921 |     2650.6 |     2475   |     2306.8 |      23.7 |      14.7 |      12.3 |

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
    parallel-requests: 1
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
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f.txt
      somap310_grundplanav_sw:
        - av_sw.txt

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
    parallel-requests: 1
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
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
    parallel-requests: 1
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
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
    parallel-requests: 1
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
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
    parallel-requests: 1
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```