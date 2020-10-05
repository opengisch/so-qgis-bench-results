# QGIS Benchmark summary 20201004-202310

_run completed in 125.21s_

## Summary
| name                               |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-singlethread-multiinstance |        97.36 |        0    |            72 |           44 |      61.11 |
| qgis310-balanced                   |       205    |      110.56 |            72 |            0 |       0    |
| qgis310-multithread-singleinstance |       350.71 |      260.22 |            72 |            0 |       0    |

## Aggregated
| name                                                             |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-singlethread-multiinstance > somap310_lk                 |         4.76 |        0    |            30 |           26 |      86.67 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig |        14.3  |      200.42 |            22 |           18 |      81.82 |
| qgis310-balanced > somap310_lk                                   |        24.04 |      405.04 |            30 |            0 |       0    |
| qgis310-multithread-singleinstance > somap310_lk                 |        41.4  |      769.75 |            30 |            0 |       0    |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     |        78.3  |     1544.96 |            20 |            0 |       0    |
| qgis310-balanced > somap310_grundplanav_sw                       |        79.72 |     1574.79 |            20 |            0 |       0    |
| qgis310-balanced > somap310_grundplanav_farbig                   |       101.24 |     2026.89 |            22 |            0 |       0    |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     |       140.9  |     2860.08 |            20 |            0 |       0    |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig |       168.41 |     3438.03 |            22 |            0 |       0    |

## Detail
| name                                                                        |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec | dashboard                                                                                                                                                     |
|-----------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| qgis310-singlethread-multiinstance > somap310_lk > lk.txt                   |         4.76 |        0    |            30 |           26 |    86.6667 |       158.6   |             6   |            4 |         1124 |        1050.6 |       1107.5  |          1124 |     25.2738  |                 87.94  |          10.3103   | [JMeter dashboard](./results/compare-deployment/20201004-202310/qgis310-singlethread-multiinstance/somap310_lk/lk.txt/dashboard/index.html)                   |
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f.txt |        14.3  |      200.42 |            22 |           18 |    81.8182 |       649.864 |             6   |            3 |         3720 |        3599.2 |       3710.25 |          3720 |      5.91398 |                120.529 |           2.52016  | [JMeter dashboard](./results/compare-deployment/20201004-202310/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) |
| qgis310-balanced > somap310_lk > lk.txt                                     |        24.04 |      405.04 |            30 |            0 |     0      |       801.267 |           825.5 |          550 |         1054 |         996.8 |       1047.95 |          1054 |     16.3755  |                443.873 |           6.68028  | [JMeter dashboard](./results/compare-deployment/20201004-202310/qgis310-balanced/somap310_lk/lk.txt/dashboard/index.html)                                     |
| qgis310-multithread-singleinstance > somap310_lk > lk.txt                   |        41.4  |      769.75 |            30 |            0 |     0      |      1379.9   |          1447   |          919 |         1561 |        1550.8 |       1558.8  |          1561 |      9.72447 |                263.59  |           3.96703  | [JMeter dashboard](./results/compare-deployment/20201004-202310/qgis310-multithread-singleinstance/somap310_lk/lk.txt/dashboard/index.html)                   |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw.txt    |        78.3  |     1544.96 |            20 |            0 |     0      |      3915.2   |          3922.5 |         2672 |         6015 |        5387.4 |       5987.7  |          6015 |      2.96428 |                922.328 |           1.24129  | [JMeter dashboard](./results/compare-deployment/20201004-202310/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)    |
| qgis310-balanced > somap310_grundplanav_sw > av_sw.txt                      |        79.72 |     1574.79 |            20 |            0 |     0      |      3985.8   |          4221   |         2375 |         5466 |        5381.1 |       5461.85 |          5466 |      3.26584 |               1016.16  |           1.36757  | [JMeter dashboard](./results/compare-deployment/20201004-202310/qgis310-balanced/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                      |
| qgis310-balanced > somap310_grundplanav_farbig > av_f.txt                   |       101.24 |     2026.89 |            22 |            0 |     0      |      4601.64  |          4745   |         2660 |         6094 |        6042.5 |       6087.85 |          6094 |      2.8527  |                371.967 |           1.21564  | [JMeter dashboard](./results/compare-deployment/20201004-202310/qgis310-balanced/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)                   |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw.txt    |       140.9  |     2860.08 |            20 |            0 |     0      |      7044.8   |          6233.5 |         3527 |        11922 |       11282.7 |      11890.6  |         11922 |      1.57916 |                491.349 |           0.661271 | [JMeter dashboard](./results/compare-deployment/20201004-202310/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)    |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f.txt |       168.41 |     3438.03 |            22 |            0 |     0      |      7654.77  |          8010   |         2715 |        11530 |       11327.9 |      11506.3  |         11530 |      1.62063 |                211.316 |           0.690608 | [JMeter dashboard](./results/compare-deployment/20201004-202310/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) |

### used global configuration

```
cpu-cores: 20
deploy-method: docker-swarm
logs-dir: /home/marco/so.ch/so-qgis-bench/./logs/prepared/
reports-dir: ./reports/
result-dir: /home/marco/so.ch/so-qgis-bench/./results/

```
### test configurations

```
# this file includes the test cases

test-cases:

  qgis310-singlethread-multiinstance:
    active: yes
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
        - lk.txt #lk_big.txt
      somap310_grundplanav_farbig:
        - av_f.txt #av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw.txt #av_sw_big.txt

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

```
### parsed test configurations

```
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
