# QGIS Benchmark summary compare-deployment (20201111-033622)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 02h 03m 28s_

_Sample size per configuration 11187_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment_20201111-033622_plot.html)

## Summary
| name                               | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance | Global  |            816.9 | +0.0%                    |              13.3 | +114.5%                   |         9502.9 | +0.0%                  |          2545   | +0.0%                   |          471 |        15892 |           1720.7 |         11187 |            0 |     8274.3 |    5132.9  |     2805.1 |      97.6 |      73.9 |      17   |          0 |
| qgis310-balanced-unlimited-threads | Global  |           1319.9 | +61.6%                   |               6.7 | +8.1%                     |        15548.8 | +63.6%                 |          4218.5 | +65.8%                  |         1251 |        19972 |           1720.6 |         11187 |            0 |     7655.4 |    4555.6  |     2631.8 |      73   |      47.1 |      12.9 |          0 |
| qgis310-balanced                   | Global  |           1354.4 | +65.8%                   |              12.2 | +96.8%                    |        15951.4 | +67.9%                 |          4372.5 | +71.8%                  |         1033 |        20983 |           1720.6 |         11187 |            0 |     7480.5 |    4523.7  |     2576.2 |      73.3 |      42.9 |      12.5 |          0 |
| qgis310-multithread-singleinstance | Global  |           3801.4 | +365.3%                  |               6.2 | +0.0%                     |        45246.9 | +376.1%                |         12608.5 | +395.4%                 |          869 |        44415 |           1720.7 |         11187 |            0 |     6682.2 |    3984.77 |     2367.8 |      44.5 |      15.6 |      12.2 |          0 |

## Aggregated
| name                                                             | group                    |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |             83.9 | +0.0%                    |               0.2 | 0                         |          922.9 | +0.0%                  |          1188   | +0.0%                   |          237 |         5308 |            105.1 |           735 |            0 |     5239.7 |     4525   |     3148.9 |      97.4 |      73.7 |      28.8 |          0 |
| qgis310-balanced-unlimited-threads > somap310_grundplanav_farbig | somap_grundplanav_farbig |            117.2 | +39.7%                   |               0.1 | 0                         |         1325.6 | +43.6%                 |          1787   | +50.4%                  |          621 |         4649 |            105.1 |           735 |            0 |     4306.2 |     3811   |     2915.3 |      73   |      50.2 |      26.6 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |            123.6 | +47.3%                   |               5.6 | 0                         |         1401.1 | +51.8%                 |          1889   | +59.0%                  |          615 |         5643 |            105.1 |           735 |            0 |     4349.7 |     3766.7 |     2713   |      73.3 |      44.3 |      24.2 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |            327   | +289.7%                  |               0   | 0                         |         3822.6 | +314.2%                |          5319   | +347.7%                 |          307 |         8894 |            105.1 |           735 |            0 |     3462.5 |     3081.4 |     2506.9 |      44.5 |      16.1 |      12.5 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |            537.4 | +0.0%                    |               0.2 | 0                         |         6336.6 | +0.0%                  |          1105   | +0.0%                   |          202 |         6498 |           1372.3 |          5190 |            0 |     8274.3 |     6903.1 |     4087   |      97.6 |      74   |      29   |          0 |
| qgis310-balanced-unlimited-threads > somap310_grundplanav_sw     | somap_grundplanav_sw     |            883.5 | +64.4%                   |               0.1 | 0                         |        10493.4 | +65.6%                 |          1885   | +70.6%                  |          565 |        11044 |           1372.3 |          5190 |            0 |     7655.4 |     6165.1 |     3480.5 |      71.2 |      45.5 |      12.9 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |            890   | +65.6%                   |               0.1 | 0                         |        10570   | +66.8%                 |          1908   | +72.7%                  |          368 |        10312 |           1372.3 |          5190 |            0 |     7480.5 |     6278.3 |     3582.2 |      58.6 |      41.8 |      13.2 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |           2527.3 | +370.3%                  |               0   | 0                         |        30210.3 | +376.8%                |          5700.5 | +415.9%                 |          380 |        22636 |           1372.3 |          5190 |            0 |     6682.2 |     5623.7 |     2827.2 |      36.1 |      14.8 |      12.5 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |            195.6 | +0.0%                    |              12.9 | +108.1%                   |         2243.4 | +0.0%                  |           252   | +0.0%                   |           32 |         4086 |            243.3 |          5262 |            0 |     5643.9 |     3970.6 |     2805.1 |      87.2 |      74   |      17   |          0 |
| qgis310-balanced-unlimited-threads > somap310_lk                 | somap_lk                 |            319.2 | +63.2%                   |               6.5 | +4.8%                     |         3729.8 | +66.3%                 |           546.5 | +116.9%                 |           65 |         4279 |            243.2 |          5262 |            0 |     4711.1 |     3690.7 |     2631.8 |      70.9 |      45.6 |      14   |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |            340.8 | +74.2%                   |               6.5 | +4.8%                     |         3980.3 | +77.4%                 |           575.5 | +128.4%                 |           50 |         5028 |            243.2 |          5262 |            0 |     4797.2 |     3526.1 |     2576.2 |      58.5 |      42.6 |      12.5 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |            947.1 | +384.2%                  |               6.2 | +0.0%                     |        11214   | +399.9%                |          1589   | +530.6%                 |          182 |        12885 |            243.3 |          5262 |            0 |     4428.6 |     3249.2 |     2367.8 |      43.9 |      15.9 |      12.2 |          0 |

## Detail
| name                                                                                                                                                                                                                                      | group                                   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201111-033622/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |             83.9 | +0.0%                    |               0.2 | 0                         |          922.9 | +0.0%                  |          1188   | +0.0%                   |           735 |            0 |          0 |      1255.71  |          237 |         5308 |        1812.6 |       2102.2  |       3112.76 |      9.41668 |               1378.47  |            4.1461  |            105.1 |     5239.7 |     4525   |     3148.9 |      97.4 |      73.7 |      28.8 |
| [qgis310-balanced-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201111-033622/qgis310-balanced-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |            117.2 | +39.7%                   |               0.1 | 0                         |         1325.6 | +43.6%                 |          1787   | +50.4%                  |           735 |            0 |          0 |      1803.59  |          621 |         4649 |        2395.6 |       2717    |       3818.92 |      6.57859 |                963.026 |            2.89651 |            105.1 |     4306.2 |     3811   |     2915.3 |      73   |      50.2 |      26.6 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201111-033622/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |            123.6 | +47.3%                   |               5.6 | 0                         |         1401.1 | +51.8%                 |          1889   | +59.0%                  |           735 |            0 |          0 |      1906.21  |          615 |         5643 |        2553.6 |       2832    |       4024.56 |      6.23145 |                912.208 |            2.74366 |            105.1 |     4349.7 |     3766.7 |     2713   |      73.3 |      44.3 |      24.2 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201111-033622/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |            327   | +289.7%                  |               0   | 0                         |         3822.6 | +314.2%                |          5319   | +347.7%                 |           735 |            0 |          0 |      5200.79  |          307 |         8894 |        6534.8 |       7690    |       8278.16 |      2.28971 |                335.184 |            1.00814 |            105.1 |     3462.5 |     3081.4 |     2506.9 |      44.5 |      16.1 |      12.5 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201111-033622/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |            537.4 | +0.0%                    |               0.2 | 0                         |         6336.6 | +0.0%                  |          1105   | +0.0%                   |          5190 |            0 |          0 |      1220.92  |          202 |         6498 |        2090.9 |       2496    |       3463.09 |      9.76963 |               2645.25  |            4.25495 |           1372.3 |     8274.3 |     6903.1 |     4087   |      97.6 |      74   |      29   |
| [qgis310-balanced-unlimited-threads > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201111-033622/qgis310-balanced-unlimited-threads/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |            883.5 | +64.4%                   |               0.1 | 0                         |        10493.4 | +65.6%                 |          1885   | +70.6%                  |          5190 |            0 |          0 |      2021.85  |          565 |        11044 |        3153.9 |       3613.35 |       5092.98 |      5.9129  |               1600.95  |            2.57523 |           1372.3 |     7655.4 |     6165.1 |     3480.5 |      71.2 |      45.5 |      12.9 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201111-033622/qgis310-balanced/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                                           | somap_grundplanav_sw > av_sw_big.txt    |            890   | +65.6%                   |               0.1 | 0                         |        10570   | +66.8%                 |          1908   | +72.7%                  |          5190 |            0 |          0 |      2036.6   |          368 |        10312 |        3149.8 |       3671.45 |       5155.9  |      5.87252 |               1590     |            2.55765 |           1372.3 |     7480.5 |     6278.3 |     3582.2 |      58.6 |      41.8 |      13.2 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201111-033622/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |           2527.3 | +370.3%                  |               0   | 0                         |        30210.3 | +376.8%                |          5700.5 | +415.9%                 |          5190 |            0 |          0 |      5820.87  |          380 |        22636 |        8319.9 |       9512.7  |      13046.5  |      2.05849 |                557.335 |            0.89653 |           1372.3 |     6682.2 |     5623.7 |     2827.2 |      36.1 |      14.8 |      12.5 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201111-033622/qgis310-singlethread-multiinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |            195.6 | +0.0%                    |              12.9 | +108.1%                   |         2243.4 | +0.0%                  |           252   | +0.0%                   |          5262 |            0 |          0 |       426.34  |           32 |         4086 |        1020.7 |       1311.4  |       2107.48 |     27.7464  |               1313.46  |           14.0551  |            243.3 |     5643.9 |     3970.6 |     2805.1 |      87.2 |      74   |      17   |
| [qgis310-balanced-unlimited-threads > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201111-033622/qgis310-balanced-unlimited-threads/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |            319.2 | +63.2%                   |               6.5 | +4.8%                     |         3729.8 | +66.3%                 |           546.5 | +116.9%                 |          5262 |            0 |          0 |       708.819 |           65 |         4279 |        1488   |       1877    |       2789.65 |     16.803   |                795.405 |            8.51163 |            243.2 |     4711.1 |     3690.7 |     2631.8 |      70.9 |      45.6 |      14   |
| [qgis310-balanced > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201111-033622/qgis310-balanced/somap310_lk/lk_big.txt/dashboard/index.html)                                                                         | somap_lk > lk_big.txt                   |            340.8 | +74.2%                   |               6.5 | +4.8%                     |         3980.3 | +77.4%                 |           575.5 | +128.4%                 |          5262 |            0 |          0 |       756.43  |           50 |         5028 |        1597.7 |       2007.85 |       3105.66 |     15.7213  |                744.186 |            7.96366 |            243.2 |     4797.2 |     3526.1 |     2576.2 |      58.5 |      42.6 |      12.5 |
| [qgis310-multithread-singleinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201111-033622/qgis310-multithread-singleinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |            947.1 | +384.2%                  |               6.2 | +0.0%                     |        11214   | +399.9%                |          1589   | +530.6%                 |          5262 |            0 |          0 |      2131.13  |          182 |        12885 |        4136   |       5011.55 |       7636.62 |      5.59286 |                264.758 |            2.83308 |            243.3 |     4428.6 |     3249.2 |     2367.8 |      43.9 |      15.9 |      12.2 |

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
      QGIS_VERSION: '3.10-ubuntu'
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
      QGIS_VERSION: 3.10-ubuntu
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
      QGIS_VERSION: 3.10-ubuntu
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
      QGIS_VERSION: 3.10-ubuntu
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
      QGIS_VERSION: 3.10-ubuntu
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