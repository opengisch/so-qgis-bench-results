# QGIS Benchmark summary compare-deployment-sequential (20201011-074655)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 00h 29m 30s_

## Summary
| name                               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-unlimited-threads          | Global  |        360.5 |               0   |           785 |            0 |     3455.8 |    2641.67 |      32.3 |   19.4    |          0 |
| qgis310-multithread-singleinstance | Global  |        363.7 |               0.9 |           785 |            0 |     3247.6 |    2443.27 |      30.4 |   17.7667 |          0 |
| qgis310-balanced                   | Global  |        438.4 |              21.6 |           785 |            0 |     3365.8 |    2608.47 |      32.2 |   16.4667 |          0 |
| qgis310-singlethread-multiinstance | Global  |        535.7 |              48.6 |           785 |            0 |     3833   |    3098    |      28.9 |   13.8333 |          0 |

## Aggregated
| name                                                             | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-unlimited-threads > somap310_grundplanav_farbig          | somap_grundplanav_farbig |        345.2 |               0   |           735 |            0 |     3455.8 |     2925.6 |      32.3 |      20   |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        348.6 |               1   |           735 |            0 |     3247.6 |     2686.1 |      30.4 |      19.7 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |        421.7 |              22.2 |           735 |            0 |     3365.8 |     2863.3 |      31.9 |      16.4 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        517.8 |              50   |           735 |            0 |     3833   |     3325.3 |      28.9 |      12.8 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |         12.5 |               0   |            20 |            0 |     2602.7 |     2390.2 |      28.7 |      18.3 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              | somap_grundplanav_sw     |         12.7 |               1.5 |            20 |            0 |     2858.1 |     2648.6 |      29.4 |      19.1 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |         13.6 |               8.6 |            20 |            0 |     2774.5 |     2593.6 |      32.2 |      17.5 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |         15.2 |              21.2 |            20 |            0 |     3198.9 |     3002.6 |      24.3 |      15.5 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |          2.6 |               0   |            30 |            0 |     2259.3 |     2253.5 |      21.4 |      15.3 |          0 |
| qgis310-unlimited-threads > somap310_lk                          | somap_lk                 |          2.6 |               0.3 |            30 |            0 |     2364   |     2350.8 |      27.2 |      19.1 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |          2.7 |               5   |            30 |            0 |     2985.1 |     2966.1 |      24.3 |      13.2 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |          3   |              18.1 |            30 |            0 |     2372.6 |     2368.5 |      21.4 |      15.5 |          0 |

## Detail
| name                                                                                                                                                                                                                                                 | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201011-074655/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   | somap_grundplanav_farbig > av_f_big.txt |        345.2 |               0   |           735 |            0 |          0 |      469.633  |           398   |          188 |         2906 |         696.4 |        841.4  |       1615.76 |      2.12274 |                310.655 |           0.934629 |     3455.8 |     2925.6 |     2295.8 |      32.3 |      20   |      12.8 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201011-074655/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        348.6 |               1   |           735 |            0 |          0 |      474.245  |           412   |          170 |         3068 |         703.4 |        840.8  |       1369.2  |      2.10195 |                307.614 |           0.925474 |     3247.6 |     2686.1 |     2206.8 |      30.4 |      19.7 |      12.6 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201011-074655/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |        421.7 |              22.2 |           735 |            0 |          0 |      573.766  |           539   |          169 |         3826 |         815   |        966.6  |       1785.08 |      1.73843 |                254.412 |           0.765419 |     3365.8 |     2863.3 |     2400.5 |      31.9 |      16.4 |       5   |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201011-074655/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        517.8 |              50   |           735 |            0 |          0 |      704.457  |           708   |          172 |         3400 |        1036.4 |       1185.8  |       1656.44 |      1.41658 |                207.311 |           0.623708 |     3833   |     3325.3 |     2958.9 |      28.9 |      12.8 |      12   |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201011-074655/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |         12.5 |               0   |            20 |            0 |          0 |      627.4    |           385.5 |          220 |         2257 |        1326.9 |       2211.6  |       2257    |      1.58655 |                493.649 |           0.664366 |     2602.7 |     2390.2 |     2352.5 |      28.7 |      18.3 |      13.4 |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201011-074655/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                 | somap_grundplanav_sw > av_sw.txt        |         12.7 |               1.5 |            20 |            0 |          0 |      636.55   |           388   |          213 |         2475 |        1207.1 |       2411.7  |       2475    |      1.56397 |                486.624 |           0.654911 |     2858.1 |     2648.6 |     2615   |      29.4 |      19.1 |      14.9 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201011-074655/qgis310-balanced/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                                   | somap_grundplanav_sw > av_sw.txt        |         13.6 |               8.6 |            20 |            0 |          0 |      681.55   |           493   |          195 |         2354 |        1429.7 |       2308.35 |       2354    |      1.46124 |                454.66  |           0.611894 |     2774.5 |     2593.6 |     2527.9 |      32.2 |      17.5 |      14.1 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201011-074655/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |         15.2 |              21.2 |            20 |            0 |          0 |      760.45   |           545   |          212 |         2545 |        1642.6 |       2500.55 |       2545    |      1.30984 |                407.554 |           0.548497 |     3198.9 |     3002.6 |     2954.4 |      24.3 |      15.5 |      12.4 |
| [qgis310-multithread-singleinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201011-074655/qgis310-multithread-singleinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |          2.6 |               0   |            30 |            0 |          0 |       85.2667 |            81   |           55 |          248 |          90   |        161.65 |        248    |     11.4987  |                311.681 |           4.69079  |     2259.3 |     2253.5 |     2247.7 |      21.4 |      15.3 |       9.2 |
| [qgis310-unlimited-threads > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201011-074655/qgis310-unlimited-threads/somap310_lk/lk.txt/dashboard/index.html)                                                               | somap_lk > lk.txt                       |          2.6 |               0.3 |            30 |            0 |          0 |       85.5333 |            78   |           51 |          279 |          92.9 |        177.8  |        279    |     11.4591  |                310.61  |           4.67467  |     2364   |     2350.8 |     2324.5 |      27.2 |      19.1 |      10.4 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201011-074655/qgis310-singlethread-multiinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |          2.7 |               5   |            30 |            0 |          0 |       89.5    |            85.5 |           68 |          216 |          99.4 |        155.5  |        216    |     10.989   |                297.867 |           4.48289  |     2985.1 |     2966.1 |     2928.9 |      24.3 |      13.2 |       0.5 |
| [qgis310-balanced > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201011-074655/qgis310-balanced/somap310_lk/lk.txt/dashboard/index.html)                                                                                 | somap_lk > lk.txt                       |          3   |              18.1 |            30 |            0 |          0 |      100.733  |            96   |           61 |          250 |         109.9 |        175.2  |        250    |      9.77836 |                265.051 |           3.98901  |     2372.6 |     2368.5 |     2364.3 |      21.4 |      15.5 |       9.7 |

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
        - av_f_big.txt
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
      - av_f_big.txt
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
      - av_f_big.txt
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
      - av_f_big.txt
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
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```