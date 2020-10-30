# QGIS Benchmark summary compare-deployment-sequential (20201029-231102)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 00h 30m 51s_

_Sample size per configuration 785_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment-sequential_20201029-231102_plot.html)

## Summary
| name                               | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads          | Global  |                375.6 | +0.0%                        |          357.5 | +0.0%                  |           859.5 | +0.0%                   |          438 |         5335 |           785 |            0 |     4995.3 |    4164.33 |     3795.6 |      35.1 |   22.8    |      12.5 |          0 |
| qgis310-multithread-singleinstance | Global  |                378   | +0.6%                        |          359.8 | +0.6%                  |           895.5 | +4.2%                   |          428 |         5580 |           785 |            0 |     4768.1 |    3944.9  |     3752.4 |      44.6 |   21.7    |      12.6 |          0 |
| qgis310-balanced                   | Global  |                451.5 | +20.2%                       |          433.4 | +21.2%                 |          1097   | +27.6%                  |          432 |         5791 |           785 |            0 |     4892.8 |    4127.53 |     3848   |      34.8 |   20.1333 |      12.2 |          0 |
| qgis310-singlethread-multiinstance | Global  |                564.2 | +50.2%                       |          545.9 | +52.7%                 |          1404.5 | +63.4%                  |          433 |         6208 |           785 |            0 |     5311.4 |    4363.5  |     4015.5 |      39.5 |   16.6    |      12.1 |          0 |

## Aggregated
| name                                                             | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads > somap310_grundplanav_farbig          | somap_grundplanav_farbig |                349.1 | +0.0%                        |          342.6 | +0.0%                  |           396   | +0.0%                   |          170 |         2847 |           735 |            0 |     4995.3 |     4441.2 |     3815.9 |      34.3 |      20.2 |      12.5 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |                351.3 | +0.6%                        |          344.6 | +0.6%                  |           412   | +4.0%                   |          172 |         2778 |           735 |            0 |     4768.1 |     4187.3 |     3766.5 |      44.6 |      19.8 |      12.6 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |                423.5 | +21.3%                       |          416.9 | +21.7%                 |           540   | +36.4%                  |          180 |         3111 |           735 |            0 |     4892.8 |     4383.8 |     3848   |      34.8 |      16.5 |      12.2 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |                533.8 | +52.9%                       |          527.2 | +53.9%                 |           708   | +78.8%                  |          166 |         3420 |           735 |            0 |     5311.4 |     4636.2 |     4046.1 |      39.5 |      13.1 |      12.1 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              | somap_grundplanav_sw     |                 18.3 | +0.0%                        |           12.5 | +0.0%                  |           385.5 | +0.0%                   |          215 |         2256 |            20 |            0 |     4385.3 |     4208   |     4139.7 |      31.1 |      19.5 |      15.2 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |                 18.6 | +1.6%                        |           12.7 | +1.9%                  |           406   | +5.3%                   |          204 |         2554 |            20 |            0 |     4086.2 |     3884.4 |     3831.6 |      33.6 |      19.8 |      13.2 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |                 19.5 | +6.6%                        |           13.6 | +9.2%                  |           464.5 | +20.5%                  |          199 |         2441 |            20 |            0 |     4299.1 |     4127.8 |     4053.3 |      31.8 |      18   |      14.2 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |                 21.2 | +15.8%                       |           15.5 | +23.8%                 |           591   | +53.3%                  |          201 |         2518 |            20 |            0 |     4621.1 |     4423.8 |     4315.2 |      36.7 |      16.6 |      12.7 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |                  8.1 | +0.0%                        |            2.5 | +0.0%                  |            77.5 | +0.0%                   |           52 |          248 |            30 |            0 |     3773.6 |     3763   |     3752.4 |      30.8 |      25.5 |      20.2 |          0 |
| qgis310-unlimited-threads > somap310_lk                          | somap_lk                 |                  8.2 | +1.2%                        |            2.5 | +0.0%                  |            78   | +0.6%                   |           53 |          232 |            30 |            0 |     3868.1 |     3843.8 |     3795.6 |      35.1 |      28.7 |      20   |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |                  8.5 | +4.9%                        |            2.9 | +14.7%                 |            92.5 | +19.4%                  |           53 |          239 |            30 |            0 |     3880.6 |     3871   |     3861.4 |      33   |      25.9 |      18.7 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |                  9.2 | +13.6%                       |            3.3 | +34.1%                 |           105.5 | +36.1%                  |           66 |          270 |            30 |            0 |     4038.4 |     4030.5 |     4015.5 |      29.5 |      20.1 |      14.2 |          0 |

## Detail
| name                                                                                                                                                                                                                                                 | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201029-231102/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   | somap_grundplanav_farbig > av_f_big.txt |                349.1 | +0.0%                        |          342.6 | +0.0%                  |           396   | +0.0%                   |           735 |            0 |          0 |      466.067  |          170 |         2847 |         707   |        841.2  |       1607.48 |      2.13848 |                312.958 |           0.941558 |     4995.3 |     4441.2 |     3815.9 |      34.3 |      20.2 |      12.5 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201029-231102/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                351.3 | +0.6%                        |          344.6 | +0.6%                  |           412   | +4.0%                   |           735 |            0 |          0 |      468.878  |          172 |         2778 |         705.2 |        842.4  |       1294    |      2.12568 |                311.086 |           0.935924 |     4768.1 |     4187.3 |     3766.5 |      44.6 |      19.8 |      12.6 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201029-231102/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |                423.5 | +21.3%                       |          416.9 | +21.7%                 |           540   | +36.4%                  |           735 |            0 |          0 |      567.237  |          180 |         3111 |         799   |        987    |       1768.96 |      1.75801 |                257.281 |           0.77404  |     4892.8 |     4383.8 |     3848   |      34.8 |      16.5 |      12.2 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201029-231102/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                533.8 | +52.9%                       |          527.2 | +53.9%                 |           708   | +78.8%                  |           735 |            0 |          0 |      717.211  |          166 |         3420 |        1057.4 |       1244.2  |       2436    |      1.39128 |                203.609 |           0.61257  |     5311.4 |     4636.2 |     4046.1 |      39.5 |      13.1 |      12.1 |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201029-231102/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                 | somap_grundplanav_sw > av_sw.txt        |                 18.3 | +0.0%                        |           12.5 | +0.0%                  |           385.5 | +0.0%                   |            20 |            0 |          0 |      624.2    |          215 |         2256 |        1311.8 |       2209.45 |       2256    |      1.59464 |                496.17  |           0.667756 |     4385.3 |     4208   |     4139.7 |      31.1 |      19.5 |      15.2 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201029-231102/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |                 18.6 | +1.6%                        |           12.7 | +1.9%                  |           406   | +5.3%                   |            20 |            0 |          0 |      635.9    |          204 |         2554 |        1301.3 |       2492.35 |       2554    |      1.56556 |                487.119 |           0.655577 |     4086.2 |     3884.4 |     3831.6 |      33.6 |      19.8 |      13.2 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201029-231102/qgis310-balanced/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                                   | somap_grundplanav_sw > av_sw.txt        |                 19.5 | +6.6%                        |           13.6 | +9.2%                  |           464.5 | +20.5%                  |            20 |            0 |          0 |      681.8    |          199 |         2441 |        1399   |       2389.25 |       2441    |      1.46049 |                454.43  |           0.611582 |     4299.1 |     4127.8 |     4053.3 |      31.8 |      18   |      14.2 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201029-231102/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |                 21.2 | +15.8%                       |           15.5 | +23.8%                 |           591   | +53.3%                  |            20 |            0 |          0 |      772.75   |          201 |         2518 |        1591.7 |       2471.75 |       2518    |      1.28874 |                400.99  |           0.539661 |     4621.1 |     4423.8 |     4315.2 |      36.7 |      16.6 |      12.7 |
| [qgis310-multithread-singleinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201029-231102/qgis310-multithread-singleinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |                  8.1 | +0.0%                        |            2.5 | +0.0%                  |            77.5 | +0.0%                   |            30 |            0 |          0 |       82.8333 |           52 |          248 |          89.6 |        164.95 |        248    |     11.8297  |                320.664 |           4.82582  |     3773.6 |     3763   |     3752.4 |      30.8 |      25.5 |      20.2 |
| [qgis310-unlimited-threads > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201029-231102/qgis310-unlimited-threads/somap310_lk/lk.txt/dashboard/index.html)                                                               | somap_lk > lk.txt                       |                  8.2 | +1.2%                        |            2.5 | +0.0%                  |            78   | +0.6%                   |            30 |            0 |          0 |       82.8333 |           53 |          232 |          90.9 |        155    |        232    |     11.8017  |                319.908 |           4.81443  |     3868.1 |     3843.8 |     3795.6 |      35.1 |      28.7 |      20   |
| [qgis310-balanced > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201029-231102/qgis310-balanced/somap310_lk/lk.txt/dashboard/index.html)                                                                                 | somap_lk > lk.txt                       |                  8.5 | +4.9%                        |            2.9 | +14.7%                 |            92.5 | +19.4%                  |            30 |            0 |          0 |       95      |           53 |          239 |         102.7 |        164.75 |        239    |     10.3377  |                280.222 |           4.21719  |     3880.6 |     3871   |     3861.4 |      33   |      25.9 |      18.7 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201029-231102/qgis310-singlethread-multiinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |                  9.2 | +13.6%                       |            3.3 | +34.1%                 |           105.5 | +36.1%                  |            30 |            0 |          0 |      111.1    |           66 |          270 |         121.6 |        195.75 |        270    |      8.86001 |                240.167 |           3.61438  |     4038.4 |     4030.5 |     4015.5 |      29.5 |      20.1 |      14.2 |

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