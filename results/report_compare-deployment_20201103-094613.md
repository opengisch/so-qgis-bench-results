# QGIS Benchmark summary compare-deployment (20201103-094613)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 02h 07m 25s_

_Sample size per configuration 11187_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment_20201103-094613_plot.html)

## Summary
| name                               | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance | Global  |                872.8 | +0.0%                        |        10142.3 | +0.0%                  |          2774.5 | +0.0%                   |          500 |        17701 |           1719.9 |         11187 |            0 |     8980.2 |    5114.67 |     2726.9 |      98   |   73.8    |      12.8 |          0 |
| qgis310-balanced-unlimited-threads | Global  |               1352.3 | +54.9%                       |        15919.1 | +57.0%                 |          4263.5 | +53.7%                  |          784 |        20373 |           1719.9 |         11187 |            0 |     8495.4 |    4692.77 |     2479.6 |      73.1 |   45.5333 |      13.6 |          0 |
| qgis310-balanced                   | Global  |               1431.5 | +64.0%                       |        16864.8 | +66.3%                 |          4572   | +64.8%                  |         1416 |        19987 |           1719.9 |         11187 |            0 |     8677.5 |    4478.33 |     2409.2 |      72.7 |   43.3333 |      12.3 |          0 |
| qgis310-multithread-singleinstance | Global  |               3875.6 | +344.0%                      |        46127.5 | +354.8%                |         12783.5 | +360.7%                 |         1365 |        45232 |           1719.9 |         11187 |            0 |     7476.1 |    3989.4  |     2250.3 |      39   |   15.5    |      12.4 |          0 |

## Aggregated
| name                                                             | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |                 92.3 | +0.0%                        |         1016.3 | +0.0%                  |          1325   | +0.0%                   |          242 |         6002 |            105   |           735 |            0 |     4922.1 |     4333.6 |     2869.8 |      95.6 |      73.6 |      24.5 |          0 |
| qgis310-balanced-unlimited-threads > somap310_grundplanav_farbig | somap_grundplanav_farbig |                119.7 | +29.7%                       |         1348.4 | +32.7%                 |          1772   | +33.7%                  |          306 |         5673 |            105   |           735 |            0 |     4248.8 |     3839   |     2770.7 |      73.1 |      47.3 |      27.3 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |                131.7 | +42.7%                       |         1496.1 | +47.2%                 |          1963   | +48.2%                  |          692 |         5637 |            105   |           735 |            0 |     4047.8 |     3538.1 |     2523.7 |      69.6 |      45   |      24.5 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |                330.1 | +257.6%                      |         3860.6 | +279.9%                |          5352   | +303.9%                 |          821 |         8642 |            105   |           735 |            0 |     3298.7 |     2925.6 |     2339.1 |      39   |      16   |      12.5 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |                568.2 | +0.0%                        |         6698.8 | +0.0%                  |          1170.5 | +0.0%                   |          225 |         6990 |           1371.7 |          5190 |            0 |     8980.2 |     7186.1 |     3874.8 |      98   |      74   |      12.8 |          0 |
| qgis310-balanced-unlimited-threads > somap310_grundplanav_sw     | somap_grundplanav_sw     |                902.3 | +58.8%                       |        10712   | +59.9%                 |          1934   | +65.2%                  |          401 |        10346 |           1371.7 |          5190 |            0 |     8495.4 |     6704.3 |     3595.6 |      62.1 |      44   |      17.1 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |                945.5 | +66.4%                       |        11233.9 | +67.7%                 |          2012   | +71.9%                  |          663 |         9038 |           1371.7 |          5190 |            0 |     8677.5 |     6511.5 |     3250.1 |      72.7 |      42.4 |      25.7 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |               2570.4 | +352.4%                      |        30722.9 | +358.6%                |          5794.5 | +395.0%                 |          386 |        23662 |           1371.7 |          5190 |            0 |     7476.1 |     5951.3 |     2673.2 |      35.2 |      14.7 |      12.4 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |                212.3 | +0.0%                        |         2427.1 | +0.0%                  |           279   | +0.0%                   |           33 |         4709 |            243.2 |          5262 |            0 |     5447.2 |     3824.3 |     2726.9 |      94.5 |      73.8 |      17.3 |          0 |
| qgis310-balanced-unlimited-threads > somap310_lk                 | somap_lk                 |                330.3 | +55.6%                       |         3858.7 | +59.0%                 |           557.5 | +99.8%                  |           77 |         4354 |            243.2 |          5262 |            0 |     4509.4 |     3535   |     2479.6 |      68.2 |      45.3 |      13.6 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |                354.3 | +66.9%                       |         4134.8 | +70.4%                 |           597   | +114.0%                 |           61 |         5312 |            243.2 |          5262 |            0 |     5049.4 |     3385.4 |     2409.2 |      58.7 |      42.6 |      12.3 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |                975.1 | +359.3%                      |        11544   | +375.6%                |          1637   | +486.7%                 |          158 |        12928 |            243.2 |          5262 |            0 |     4119.1 |     3091.3 |     2250.3 |      37.3 |      15.8 |      12.5 |          0 |

## Detail
| name                                                                                                                                                                                                                                      | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201103-094613/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 92.3 | +0.0%                        |         1016.3 | +0.0%                  |          1325   | +0.0%                   |           735 |            0 |          0 |      1382.79  |          242 |         6002 |        2042   |       2259.8  |       3680.08 |      8.53946 |               1249.72  |           3.75986  |            105   |     4922.1 |     4333.6 |     2869.8 |      95.6 |      73.6 |      24.5 |
| [qgis310-balanced-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201103-094613/qgis310-balanced-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                119.7 | +29.7%                       |         1348.4 | +32.7%                 |          1772   | +33.7%                  |           735 |            0 |          0 |      1834.52  |          306 |         5673 |        2448.4 |       2858.6  |       4047.12 |      6.44963 |                943.882 |           2.83973  |            105   |     4248.8 |     3839   |     2770.7 |      73.1 |      47.3 |      27.3 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201103-094613/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |                131.7 | +42.7%                       |         1496.1 | +47.2%                 |          1963   | +48.2%                  |           735 |            0 |          0 |      2035.49  |          692 |         5637 |        2823   |       3162.4  |       4258.68 |      5.83848 |                854.446 |           2.57064  |            105   |     4047.8 |     3538.1 |     2523.7 |      69.6 |      45   |      24.5 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201103-094613/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                330.1 | +257.6%                      |         3860.6 | +279.9%                |          5352   | +303.9%                 |           735 |            0 |          0 |      5252.53  |          821 |         8642 |        6689   |       7609.8  |       8258.4  |      2.2675  |                331.846 |           0.998363 |            105   |     3298.7 |     2925.6 |     2339.1 |      39   |      16   |      12.5 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201103-094613/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                568.2 | +0.0%                        |         6698.8 | +0.0%                  |          1170.5 | +0.0%                   |          5190 |            0 |          0 |      1290.72  |          225 |         6990 |        2224.9 |       2669.9  |       3671.71 |      9.24293 |               2501.53  |           4.02556  |           1371.7 |     8980.2 |     7186.1 |     3874.8 |      98   |      74   |      12.8 |
| [qgis310-balanced-unlimited-threads > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201103-094613/qgis310-balanced-unlimited-threads/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                902.3 | +58.8%                       |        10712   | +59.9%                 |          1934   | +65.2%                  |          5190 |            0 |          0 |      2063.97  |          401 |        10346 |        3213   |       3707    |       5313.26 |      5.79374 |               1568.04  |           2.52334  |           1371.7 |     8495.4 |     6704.3 |     3595.6 |      62.1 |      44   |      17.1 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201103-094613/qgis310-balanced/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                                           | somap_grundplanav_sw > av_sw_big.txt    |                945.5 | +66.4%                       |        11233.9 | +67.7%                 |          2012   | +71.9%                  |          5190 |            0 |          0 |      2164.53  |          663 |         9038 |        3399   |       3914.45 |       5309.34 |      5.52716 |               1495.9   |           2.40723  |           1371.7 |     8677.5 |     6511.5 |     3250.1 |      72.7 |      42.4 |      25.7 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201103-094613/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |               2570.4 | +352.4%                      |        30722.9 | +358.6%                |          5794.5 | +395.0%                 |          5190 |            0 |          0 |      5919.64  |          386 |        23662 |        8399   |       9651.75 |      13285.4  |      2.02425 |                547.859 |           0.881618 |           1371.7 |     7476.1 |     5951.3 |     2673.2 |      35.2 |      14.7 |      12.4 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201103-094613/qgis310-singlethread-multiinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                212.3 | +0.0%                        |         2427.1 | +0.0%                  |           279   | +0.0%                   |          5262 |            0 |          0 |       461.254 |           33 |         4709 |        1114.2 |       1447.85 |       2214.48 |     25.5768  |               1210.69  |          12.956    |            243.2 |     5447.2 |     3824.3 |     2726.9 |      94.5 |      73.8 |      17.3 |
| [qgis310-balanced-unlimited-threads > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201103-094613/qgis310-balanced-unlimited-threads/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                330.3 | +55.6%                       |         3858.7 | +59.0%                 |           557.5 | +99.8%                  |          5262 |            0 |          0 |       733.311 |           77 |         4354 |        1560.7 |       1902    |       2878.74 |     16.2461  |                769.037 |           8.22952  |            243.2 |     4509.4 |     3535   |     2479.6 |      68.2 |      45.3 |      13.6 |
| [qgis310-balanced > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201103-094613/qgis310-balanced/somap310_lk/lk_big.txt/dashboard/index.html)                                                                         | somap_lk > lk_big.txt                   |                354.3 | +66.9%                       |         4134.8 | +70.4%                 |           597   | +114.0%                 |          5262 |            0 |          0 |       785.78  |           61 |         5312 |        1652   |       2083.7  |       3278.03 |     15.1247  |                715.954 |           7.66147  |            243.2 |     5049.4 |     3385.4 |     2409.2 |      58.7 |      42.6 |      12.3 |
| [qgis310-multithread-singleinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201103-094613/qgis310-multithread-singleinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                975.1 | +359.3%                      |        11544   | +375.6%                |          1637   | +486.7%                 |          5262 |            0 |          0 |      2193.84  |          158 |        12928 |        4230   |       5154.1  |       8003.11 |      5.43245 |                257.15  |           2.75183  |            243.2 |     4119.1 |     3091.3 |     2250.3 |      37.3 |      15.8 |      12.5 |

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
      QGIS_REPLICAS: '3'
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
      QGIS_REPLICAS: '3'
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
      QGIS_REPLICAS: '1'
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
      QGIS_REPLICAS: '6'
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