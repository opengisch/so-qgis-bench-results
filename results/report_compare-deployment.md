# QGIS Benchmark summary compare-deployment (20201005-122514)

_run completed in 7264.139999999999s_

## Summary
| name                               |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-singlethread-multiinstance |      30988.2 |        0    |         11198 |            1 |       0.01 |
| qgis310-unlimited-threads          |      51021   |       64.65 |         11198 |           51 |       0.46 |
| qgis310-balanced                   |      53401   |       72.33 |         11198 |            1 |       0.01 |
| qgis310-multithread-singleinstance |     148017   |      377.66 |         11198 |           14 |       0.13 |

## Aggregated
| name                                                             |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig |      3163.33 |        0    |           735 |            0 |       0    |
| qgis310-unlimited-threads > somap310_grundplanav_farbig          |      4412.98 |       39.5  |           735 |            0 |       0    |
| qgis310-balanced > somap310_grundplanav_farbig                   |      4934.21 |       55.98 |           735 |            0 |       0    |
| qgis310-singlethread-multiinstance > somap310_lk                 |      6956.07 |      119.9  |          5272 |            0 |       0    |
| qgis310-unlimited-threads > somap310_lk                          |     12650    |      299.9  |          5272 |           50 |       0.95 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig |     12967    |      309.92 |           735 |            0 |       0    |
| qgis310-balanced > somap310_lk                                   |     13288    |      320.06 |          5272 |            0 |       0    |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     |     20868.8  |      559.71 |          5191 |            1 |       0.02 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              |     33958    |      973.49 |          5191 |            1 |       0.02 |
| qgis310-balanced > somap310_grundplanav_sw                       |     35178.8  |     1012.08 |          5191 |            1 |       0.02 |
| qgis310-multithread-singleinstance > somap310_lk                 |     35280.2  |     1015.29 |          5272 |           13 |       0.25 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     |     99769.6  |     3053.94 |          5191 |            1 |       0.02 |

## Detail
| name                                                                            |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec | dashboard                                                                                                                                                         |
|---------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt |      3163.33 |        0    |           735 |            0 |  0         |       4303.85 |          4317   |         1542 |         8493 |        6083.8 |       6460.2  |       7544    |      8.91395 |               1304.53  |           3.92475  | [JMeter dashboard](./details/compare-deployment/20201005-122514/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |
| qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt          |      4412.98 |       39.5  |           735 |            0 |  0         |       6004.06 |          6016   |         2356 |         9701 |        7584   |       7970.2  |       8921.64 |      6.49219 |                950.092 |           2.85846  | [JMeter dashboard](./details/compare-deployment/20201005-122514/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)          |
| qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt                   |      4934.21 |       55.98 |           735 |            0 |  0         |       6713.21 |          7056   |         2551 |         9595 |        8418.6 |       8659    |       9170.16 |      5.78736 |                846.964 |           2.54813  | [JMeter dashboard](./details/compare-deployment/20201005-122514/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   |
| qgis310-singlethread-multiinstance > somap310_lk > lk_big.txt                   |      6956.07 |      119.9  |          5272 |            0 |  0         |       1319.44 |          1046.5 |          122 |         8520 |        2698.1 |       3225.7  |       4517.54 |     29.3213  |               1398.58  |          14.8535   | [JMeter dashboard](./details/compare-deployment/20201005-122514/qgis310-singlethread-multiinstance/somap310_lk/lk_big.txt/dashboard/index.html)                   |
| qgis310-unlimited-threads > somap310_lk > lk_big.txt                            |     12650    |      299.9  |          5272 |           50 |  0.948407  |       2399.47 |          1897   |          123 |        15075 |        4774.4 |       5944.1  |       8201.62 |     16.3071  |                771.545 |           8.18562  | [JMeter dashboard](./details/compare-deployment/20201005-122514/qgis310-unlimited-threads/somap310_lk/lk_big.txt/dashboard/index.html)                            |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt |     12967    |      309.92 |           735 |            0 |  0         |      17642.1  |         18274   |         2619 |        24084 |       20690.6 |      21736.4  |      23360.4  |      2.21997 |                324.884 |           0.977436 | [JMeter dashboard](./details/compare-deployment/20201005-122514/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |
| qgis310-balanced > somap310_lk > lk_big.txt                                     |     13288    |      320.06 |          5272 |            0 |  0         |       2520.48 |          2044.5 |           41 |        12418 |        4956.7 |       6016.05 |       7951.13 |     15.5134  |                739.928 |           7.85872  | [JMeter dashboard](./details/compare-deployment/20201005-122514/qgis310-balanced/somap310_lk/lk_big.txt/dashboard/index.html)                                     |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw_big.txt    |     20868.8  |      559.71 |          5191 |            1 |  0.0192641 |       4020.18 |          3833   |         1106 |        12228 |        6170.4 |       6873.6  |       8689.52 |      9.88928 |               2675.93  |           4.30698  | [JMeter dashboard](./details/compare-deployment/20201005-122514/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)    |
| qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw_big.txt             |     33958    |      973.49 |          5191 |            1 |  0.0192641 |       6541.7  |          6392   |         2289 |        17955 |        9255.2 |      10332    |      13261.1  |      6.08017 |               1645.24  |           2.64804  | [JMeter dashboard](./details/compare-deployment/20201005-122514/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)             |
| qgis310-balanced > somap310_grundplanav_sw > av_sw_big.txt                      |     35178.8  |     1012.08 |          5191 |            1 |  0.0192641 |       6776.89 |          6612   |         2322 |        16999 |        9751.4 |      10818.8  |      13188    |      5.86107 |               1586.02  |           2.55261  | [JMeter dashboard](./details/compare-deployment/20201005-122514/qgis310-balanced/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                      |
| qgis310-multithread-singleinstance > somap310_lk > lk_big.txt                   |     35280.2  |     1015.29 |          5272 |           13 |  0.246586  |       6692    |          5568   |           48 |       130519 |       12527.7 |      15469.7  |      20051.8  |      5.85939 |                279.038 |           2.96116  | [JMeter dashboard](./details/compare-deployment/20201005-122514/qgis310-multithread-singleinstance/somap310_lk/lk_big.txt/dashboard/index.html)                   |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw_big.txt    |     99769.6  |     3053.94 |          5191 |            1 |  0.0192641 |      19219.7  |         19258   |         2533 |        40891 |       25965.8 |      29097.2  |      35507.5  |      2.0725  |                560.805 |           0.902616 | [JMeter dashboard](./details/compare-deployment/20201005-122514/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)    |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/marco/so.ch/so-qgis-bench/./logs/prepared/
reports-dir: ./reports/
result-dir: /home/marco/so.ch/so-qgis-bench/[JMeter dashboard](./details/

```
### test configurations

```
# this file includes the test cases

test-cases:

  qgis310-singlethread-multiinstance:
    active: yes
    parallel-requests: 40
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
    parallel-requests: 40
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
    parallel-requests: 40
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
    parallel-requests: 40
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
    parallel-requests: 40
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
