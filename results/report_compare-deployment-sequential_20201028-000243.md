# QGIS Benchmark summary compare-deployment-sequential (20201028-000243)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 00h 29m 37s_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment-sequential_20201028-000243_plot.html)

## Summary
| name                               | group   |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads          | Global  |        359.8 |           894.5 |               0   |           785 |            0 |     3563   |    2729.57 |     2386.7 |      40.4 |   19.8667 |       9.8 |          0 |
| qgis310-multithread-singleinstance | Global  |        364.1 |           875.5 |               1.2 |           785 |            0 |     3306.6 |    2500.4  |     2291.6 |      32.8 |   18.6333 |       9.4 |          0 |
| qgis310-balanced                   | Global  |        434.4 |          1089   |              20.7 |           785 |            0 |     3433.8 |    2666.77 |     2396.7 |      31.8 |   17      |       9.7 |          0 |
| qgis310-singlethread-multiinstance | Global  |        547.6 |          1378   |              52.2 |           785 |            0 |     3780.7 |    2934.6  |     2585.3 |      38.3 |   14.6333 |      11.9 |          0 |

## Aggregated
| name                                                             | group                    |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads > somap310_grundplanav_farbig          | somap_grundplanav_farbig |        344.4 |           396   |               0   |           735 |            0 |     3563   |     3022.9 |     2456.7 |      40.4 |      20.2 |      12.7 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        349.2 |           418   |               1.4 |           735 |            0 |     3306.6 |     2726.9 |     2291.6 |      27.5 |      19.8 |      12.5 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |        418   |           538   |              21.4 |           735 |            0 |     3433.8 |     2931.3 |     2396.7 |      31.8 |      16.5 |      12.4 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        529   |           703   |              53.6 |           735 |            0 |     3780.7 |     3211.7 |     2622.7 |      38.3 |      13.1 |      11.9 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |         12.5 |           383   |               0   |            20 |            0 |     2641.3 |     2459.7 |     2397.2 |      32.8 |      18.9 |      15.5 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              | somap_grundplanav_sw     |         12.7 |           413.5 |               2.3 |            20 |            0 |     2942.1 |     2746   |     2691.8 |      31.2 |      19.1 |      13.6 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |         13.6 |           458.5 |               9.4 |            20 |            0 |     2723.6 |     2649.1 |     2609.3 |      24.4 |      17.3 |      13.8 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |         15.2 |           565   |              22.1 |            20 |            0 |     3181.4 |     2999.4 |     2936.1 |      24.6 |      15.7 |      12.6 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |          2.4 |            74.5 |               0   |            30 |            0 |     2316   |     2314.6 |     2313.1 |      25.1 |      17.2 |       9.4 |          0 |
| qgis310-unlimited-threads > somap310_lk                          | somap_lk                 |          2.7 |            85   |              12.7 |            30 |            0 |     2447.8 |     2419.8 |     2386.7 |      31.1 |      20.3 |       9.8 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |          2.9 |            92.5 |              19.8 |            30 |            0 |     2432.2 |     2419.9 |     2403.3 |      25.2 |      17.2 |       9.7 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |          3.4 |           110   |              43.1 |            30 |            0 |     2601.5 |     2592.7 |     2585.3 |      16.1 |      15.1 |      14   |          0 |

## Detail
| name                                                                                                                                                                                                                                                 | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201028-000243/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   | somap_grundplanav_farbig > av_f_big.txt |        344.4 |               0   |           735 |            0 |          0 |      468.565  |           396   |          183 |         2840 |         700   |        850.4  |       1636.12 |      2.12743 |                311.344 |           0.93669  |     3563   |     3022.9 |     2456.7 |      40.4 |      20.2 |      12.7 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201028-000243/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        349.2 |               1.4 |           735 |            0 |          0 |      475.159  |           418   |          178 |         2915 |         706.8 |        846.4  |       1333.36 |      2.09803 |                307.039 |           0.923747 |     3306.6 |     2726.9 |     2291.6 |      27.5 |      19.8 |      12.5 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201028-000243/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |        418   |              21.4 |           735 |            0 |          0 |      568.639  |           538   |          181 |         3014 |         808   |        987.6  |       1758.08 |      1.75398 |                256.694 |           0.772263 |     3433.8 |     2931.3 |     2396.7 |      31.8 |      16.5 |      12.4 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201028-000243/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        529   |              53.6 |           735 |            0 |          0 |      719.673  |           703   |          183 |         3274 |        1062.4 |       1274.4  |       2449.84 |      1.38653 |                202.915 |           0.61048  |     3780.7 |     3211.7 |     2622.7 |      38.3 |      13.1 |      11.9 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201028-000243/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |         12.5 |               0   |            20 |            0 |          0 |      622.9    |           383   |          218 |         2341 |        1319   |       2291.1  |       2341    |      1.59847 |                497.36  |           0.669357 |     2641.3 |     2459.7 |     2397.2 |      32.8 |      18.9 |      15.5 |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201028-000243/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                 | somap_grundplanav_sw > av_sw.txt        |         12.7 |               2.3 |            20 |            0 |          0 |      637.3    |           413.5 |          205 |         2349 |        1334   |       2299.3  |       2349    |      1.5614  |                485.827 |           0.653837 |     2942.1 |     2746   |     2691.8 |      31.2 |      19.1 |      13.6 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201028-000243/qgis310-balanced/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                                   | somap_grundplanav_sw > av_sw.txt        |         13.6 |               9.4 |            20 |            0 |          0 |      681.2    |           458.5 |          206 |         2268 |        1439.8 |       2227.2  |       2268    |      1.46199 |                454.894 |           0.612208 |     2723.6 |     2649.1 |     2609.3 |      24.4 |      17.3 |      13.8 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201028-000243/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |         15.2 |              22.1 |            20 |            0 |          0 |      760.65   |           565   |          200 |         2405 |        1634.8 |       2367.1  |       2405    |      1.30976 |                407.529 |           0.548461 |     3181.4 |     2999.4 |     2936.1 |      24.6 |      15.7 |      12.6 |
| [qgis310-multithread-singleinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201028-000243/qgis310-multithread-singleinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |          2.4 |               0   |            30 |            0 |          0 |       79.9    |            74.5 |           56 |          241 |          85.5 |        158.5  |        241    |     12.29    |                333.144 |           5.01363  |     2316   |     2314.6 |     2313.1 |      25.1 |      17.2 |       9.4 |
| [qgis310-unlimited-threads > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201028-000243/qgis310-unlimited-threads/somap310_lk/lk.txt/dashboard/index.html)                                                               | somap_lk > lk.txt                       |          2.7 |              12.7 |            30 |            0 |          0 |       90.0667 |            85   |           51 |          277 |         101.9 |        183.5  |        277    |     10.8774  |                294.853 |           4.43738  |     2447.8 |     2419.8 |     2386.7 |      31.1 |      20.3 |       9.8 |
| [qgis310-balanced > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201028-000243/qgis310-balanced/somap310_lk/lk.txt/dashboard/index.html)                                                                                 | somap_lk > lk.txt                       |          2.9 |              19.8 |            30 |            0 |          0 |       95.7    |            92.5 |           50 |          252 |         105   |        178.3  |        252    |     10.2916  |                278.973 |           4.19838  |     2432.2 |     2419.9 |     2403.3 |      25.2 |      17.2 |       9.7 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201028-000243/qgis310-singlethread-multiinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |          3.4 |              43.1 |            30 |            0 |          0 |      114.3    |           110   |           63 |          280 |         123.9 |        195.85 |        280    |      8.62317 |                233.747 |           3.51776  |     2601.5 |     2592.7 |     2585.3 |      16.1 |      15.1 |      14   |

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