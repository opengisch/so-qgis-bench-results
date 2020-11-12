# QGIS Benchmark summary compare-deployment-sequential (20201111-025510)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 00h 31m 32s_

_Sample size per configuration 785_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment-sequential_20201111-025510_plot.html)

## Summary
| name                               | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads          | Global  |            375.8 | +0.0%                    |               6.5 | +3.2%                     |          358   | +0.0%                  |           865   | +0.0%                   |          464 |         5023 |              112 |           785 |            0 |     3619.6 |    2839.03 |     2535.7 |      34.3 |   18.7667 |      12.5 |          0 |
| qgis310-multithread-singleinstance | Global  |            386.3 | +2.8%                    |               6.3 | +0.0%                     |          368.2 | +2.8%                  |           916.5 | +6.0%                   |          462 |         4445 |              112 |           785 |            0 |     3388.9 |    2586.23 |     2372.8 |      45.7 |   19.1333 |      11.8 |          0 |
| qgis310-balanced                   | Global  |            451.8 | +20.2%                   |              10.2 | +61.9%                    |          433.8 | +21.2%                 |          1100   | +27.2%                  |          449 |         5168 |              112 |           785 |            0 |     3519   |    2770.7  |     2537.4 |      34.3 |   16.4333 |      12.4 |          0 |
| qgis310-singlethread-multiinstance | Global  |            556.6 | +48.1%                   |              21.5 | +241.3%                   |          538.9 | +50.5%                 |          1392   | +60.9%                  |          450 |         5887 |              112 |           785 |            0 |     3864   |    3074.03 |     2791.2 |      31   |   14.4    |      12.1 |          0 |

## Aggregated
| name                                                             | group                    |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads > somap310_grundplanav_farbig          | somap_grundplanav_farbig |            350.9 | +0.0%                    |               0.1 | 0                         |          344.5 | +0.0%                  |           402   | +0.0%                   |          191 |         3011 |            105.1 |           735 |            0 |     3619.6 |     3078.6 |     2589.1 |      34.3 |      19.9 |      12.5 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |            361.3 | +3.0%                    |               0   | 0                         |          354.7 | +3.0%                  |           428   | +6.5%                   |          185 |         2818 |            105.1 |           735 |            0 |     3388.9 |     2813.6 |     2403.4 |      45.7 |      19.5 |      12.5 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |            425.4 | +21.2%                   |               0.1 | 0                         |          418.7 | +21.6%                 |           543   | +35.1%                  |          187 |         2911 |            105.1 |           735 |            0 |     3519   |     3027.3 |     2543.6 |      34.3 |      16.4 |      12.5 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |            527.8 | +50.4%                   |               0.2 | 0                         |          521.4 | +51.4%                 |           704   | +75.1%                  |          173 |         3357 |            105.1 |           735 |            0 |     3864   |     3331.3 |     2831.7 |      31   |      12.9 |      12.1 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              | somap_grundplanav_sw     |             16.2 | +0.0%                    |               0.1 | 0                         |           10.3 | +0.0%                  |           380.5 | +0.0%                   |          213 |         1226 |              6.1 |            20 |            0 |     3022.3 |     2882.9 |     2771.8 |      25.8 |      18.3 |      14.9 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |             16.3 | +0.6%                    |               0   | 0                         |           10.7 | +3.1%                  |           401.5 | +5.5%                   |          219 |         1342 |              6.1 |            20 |            0 |     2708.4 |     2546.3 |     2464   |      24.5 |      18.1 |      15.4 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |             17.1 | +5.6%                    |               3.6 | 0                         |           11.4 | +10.2%                 |           460.5 | +21.0%                  |          204 |         1418 |              6.1 |            20 |            0 |     2918.1 |     2731.1 |     2666.7 |      26   |      16.5 |      13.1 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |             19.1 | +17.9%                   |               8.4 | 0                         |           13.4 | +29.6%                 |           575   | +51.1%                  |          211 |         1662 |              6.1 |            20 |            0 |     3138.8 |     3075.9 |     2989.1 |      23.7 |      14.3 |      12.4 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |              8.7 | +0.0%                    |               6.3 | +0.0%                     |            2.8 | +0.0%                  |            87   | +5.5%                   |           58 |          285 |              0.8 |            30 |            0 |     2421.8 |     2398.8 |     2372.8 |      28.2 |      19.8 |      11.8 |          0 |
| qgis310-unlimited-threads > somap310_lk                          | somap_lk                 |              8.7 | +0.0%                    |               6.3 | +0.0%                     |            3.2 | +13.5%                 |            82.5 | +0.0%                   |           60 |          786 |              0.8 |            30 |            0 |     2567.7 |     2555.6 |     2535.7 |      21.4 |      18.1 |      12.5 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |              9.3 | +6.9%                    |               6.5 | +3.2%                     |            3.6 | +29.1%                 |            96.5 | +17.0%                  |           58 |          839 |              0.8 |            30 |            0 |     2562.4 |     2553.7 |     2537.4 |      19.4 |      16.4 |      12.4 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |              9.7 | +11.5%                   |              12.9 | +104.8%                   |            4.1 | +46.0%                 |           113   | +37.0%                  |           66 |          868 |              0.8 |            30 |            0 |     2835.8 |     2814.9 |     2791.2 |      22.5 |      16   |      13.5 |          0 |

## Detail
| name                                                                                                                                                                                                                                                 | group                                   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201111-025510/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   | somap_grundplanav_farbig > av_f_big.txt |            350.9 | +0.0%                    |               0.1 | 0                         |          344.5 | +0.0%                  |           402   | +0.0%                   |           735 |            0 |          0 |      468.649  |          191 |         3011 |         697.4 |        848.6  |       1480.96 |      2.12695 |                311.353 |           0.936482 |            105.1 |     3619.6 |     3078.6 |     2589.1 |      34.3 |      19.9 |      12.5 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201111-025510/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |            361.3 | +3.0%                    |               0   | 0                         |          354.7 | +3.0%                  |           428   | +6.5%                   |           735 |            0 |          0 |      482.603  |          185 |         2818 |         721.2 |        837.8  |       1251.32 |      2.06551 |                302.363 |           0.90943  |            105.1 |     3388.9 |     2813.6 |     2403.4 |      45.7 |      19.5 |      12.5 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201111-025510/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |            425.4 | +21.2%                   |               0.1 | 0                         |          418.7 | +21.6%                 |           543   | +35.1%                  |           735 |            0 |          0 |      569.722  |          187 |         2911 |         805   |        977.2  |       1653.44 |      1.75053 |                256.251 |           0.770746 |            105.1 |     3519   |     3027.3 |     2543.6 |      34.3 |      16.4 |      12.5 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201111-025510/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |            527.8 | +50.4%                   |               0.2 | 0                         |          521.4 | +51.4%                 |           704   | +75.1%                  |           735 |            0 |          0 |      709.426  |          173 |         3357 |        1035   |       1210.6  |       2005.12 |      1.4066  |                205.906 |           0.619315 |            105.1 |     3864   |     3331.3 |     2831.7 |      31   |      12.9 |      12.1 |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201111-025510/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                 | somap_grundplanav_sw > av_sw.txt        |             16.2 | +0.0%                    |               0.1 | 0                         |           10.3 | +0.0%                  |           380.5 | +0.0%                   |            20 |            0 |          0 |      516.4    |          213 |         1226 |        1143.3 |       1222.9  |       1226    |      1.92548 |                598.549 |           0.806296 |              6.1 |     3022.3 |     2882.9 |     2771.8 |      25.8 |      18.3 |      14.9 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201111-025510/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |             16.3 | +0.6%                    |               0   | 0                         |           10.7 | +3.1%                  |           401.5 | +5.5%                   |            20 |            0 |          0 |      532.65   |          219 |         1342 |        1108.7 |       1331.3  |       1342    |      1.86776 |                580.605 |           0.782126 |              6.1 |     2708.4 |     2546.3 |     2464   |      24.5 |      18.1 |      15.4 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201111-025510/qgis310-balanced/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                                   | somap_grundplanav_sw > av_sw.txt        |             17.1 | +5.6%                    |               3.6 | 0                         |           11.4 | +10.2%                 |           460.5 | +21.0%                  |            20 |            0 |          0 |      569.05   |          204 |         1418 |        1212.9 |       1409.05 |       1418    |      1.74825 |                543.456 |           0.73208  |              6.1 |     2918.1 |     2731.1 |     2666.7 |      26   |      16.5 |      13.1 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201111-025510/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |             19.1 | +17.9%                   |               8.4 | 0                         |           13.4 | +29.6%                 |           575   | +51.1%                  |            20 |            0 |          0 |      669.35   |          211 |         1662 |        1479.1 |       1654.85 |       1662    |      1.48721 |                462.309 |           0.622769 |              6.1 |     3138.8 |     3075.9 |     2989.1 |      23.7 |      14.3 |      12.4 |
| [qgis310-multithread-singleinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201111-025510/qgis310-multithread-singleinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |              8.7 | +0.0%                    |               6.3 | +0.0%                     |            2.8 | +0.0%                  |            87   | +5.5%                   |            30 |            0 |          0 |       93.8667 |           58 |          285 |         112.1 |        192.6  |        285    |     10.4676  |                283.742 |           4.27016  |              0.8 |     2421.8 |     2398.8 |     2372.8 |      28.2 |      19.8 |      11.8 |
| [qgis310-unlimited-threads > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201111-025510/qgis310-unlimited-threads/somap310_lk/lk.txt/dashboard/index.html)                                                               | somap_lk > lk.txt                       |              8.7 | +0.0%                    |               6.3 | +0.0%                     |            3.2 | +13.5%                 |            82.5 | +0.0%                   |            30 |            0 |          0 |      106.5    |           60 |          786 |          97.7 |        408.15 |        786    |      9.23645 |                250.371 |           3.76794  |              0.8 |     2567.7 |     2555.6 |     2535.7 |      21.4 |      18.1 |      12.5 |
| [qgis310-balanced > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201111-025510/qgis310-balanced/somap310_lk/lk.txt/dashboard/index.html)                                                                                 | somap_lk > lk.txt                       |              9.3 | +6.9%                    |               6.5 | +3.2%                     |            3.6 | +29.1%                 |            96.5 | +17.0%                  |            30 |            0 |          0 |      121.2    |           58 |          839 |         117.7 |        443    |        839    |      8.14111 |                220.68  |           3.32111  |              0.8 |     2562.4 |     2553.7 |     2537.4 |      19.4 |      16.4 |      12.4 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201111-025510/qgis310-singlethread-multiinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |              9.7 | +11.5%                   |              12.9 | +104.8%                   |            4.1 | +46.0%                 |           113   | +37.0%                  |            30 |            0 |          0 |      137.033  |           66 |          868 |         135   |        469.25 |        868    |      7.21154 |                195.482 |           2.94189  |              0.8 |     2835.8 |     2814.9 |     2791.2 |      22.5 |      16   |      13.5 |

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
      QGIS_VERSION: '3.10-ubuntu'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1'
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
      QGIS_REPLICAS: '3'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: 3.10-ubuntu
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
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: 3.10-ubuntu
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
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: 3.10-ubuntu
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
      QGIS_REPLICAS: '3'
      QGIS_SERVER_MAX_THREADS: '-1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: 3.10-ubuntu
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