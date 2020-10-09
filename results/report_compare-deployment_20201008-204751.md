# QGIS Benchmark summary compare-deployment (20201008-204751)

_run completed in 7268.099999999999s_

## Summary
| name                               |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-singlethread-multiinstance |      9623.73 |        0    |         11198 |            1 |       0.01 |
| qgis310-unlimited-threads          |     15338    |       59.38 |         11198 |            1 |       0.01 |
| qgis310-balanced                   |     15793.7  |       64.11 |         11198 |            1 |       0.01 |
| qgis310-multithread-singleinstance |     45259.2  |      370.29 |         11198 |            1 |       0.01 |

## Aggregated
| name                                                             |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig |       940.25 |        0    |           735 |            0 |       0    |
| qgis310-unlimited-threads > somap310_grundplanav_farbig          |      1318.97 |       40.28 |           735 |            0 |       0    |
| qgis310-balanced > somap310_grundplanav_farbig                   |      1344.01 |       42.94 |           735 |            0 |       0    |
| qgis310-singlethread-multiinstance > somap310_lk                 |      2321.46 |      146.9  |          5272 |            0 |       0    |
| qgis310-unlimited-threads > somap310_lk                          |      3666.73 |      289.97 |          5272 |            0 |       0    |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig |      3828.61 |      307.19 |           735 |            0 |       0    |
| qgis310-balanced > somap310_lk                                   |      3941.2  |      319.17 |          5272 |            0 |       0    |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     |      6362.02 |      576.63 |          5191 |            1 |       0.02 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              |     10352.3  |     1001.02 |          5191 |            1 |       0.02 |
| qgis310-balanced > somap310_grundplanav_sw                       |     10508.5  |     1017.63 |          5191 |            1 |       0.02 |
| qgis310-multithread-singleinstance > somap310_lk                 |     10901    |     1059.37 |          5272 |            0 |       0    |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     |     30529.6  |     3146.97 |          5191 |            1 |       0.02 |

## Detail
| name                                                                                                                                                                                                                                      |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201008-204751/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |       940.25 |        0    |           735 |            0 |  0         |      1279.25  |            1232 |          381 |         3897 |        1903.4 |       2185.6  |       3299    |      9.25087 |               1353.82  |           4.07309  |
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201008-204751/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   |      1318.97 |       40.28 |           735 |            0 |  0         |      1794.51  |            1805 |          743 |         4364 |        2429   |       2733.4  |       3807.8  |      6.61912 |                968.691 |           2.91435  |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201008-204751/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     |      1344.01 |       42.94 |           735 |            0 |  0         |      1828.58  |            1792 |          748 |         4446 |        2481   |       2819.6  |       3706.12 |      6.49448 |                950.451 |           2.85947  |
| [qgis310-singlethread-multiinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201008-204751/qgis310-singlethread-multiinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     |      2321.46 |      146.9  |          5272 |            0 |  0         |       440.337 |             240 |           27 |         4053 |        1085.7 |       1440.4  |       2310.7  |     26.8823  |               1282.19  |          13.618    |
| [qgis310-unlimited-threads > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201008-204751/qgis310-unlimited-threads/somap310_lk/lk_big.txt/dashboard/index.html)                                                       |      3666.73 |      289.97 |          5272 |            0 |  0         |       695.511 |             527 |           33 |         5098 |        1477.7 |       1885.7  |       2887    |     17.1165  |                816.404 |           8.67086  |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201008-204751/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |      3828.61 |      307.19 |           735 |            0 |  0         |      5209     |            5357 |         2381 |         8717 |        6766.4 |       7551.2  |       8294.96 |      2.28286 |                334.088 |           1.00513  |
| [qgis310-balanced > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201008-204751/qgis310-balanced/somap310_lk/lk_big.txt/dashboard/index.html)                                                                         |      3941.2  |      319.17 |          5272 |            0 |  0         |       747.572 |             557 |           33 |         5051 |        1652.4 |       2018.8  |       3120.54 |     15.931   |                759.868 |           8.07029  |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201008-204751/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       |      6362.02 |      576.63 |          5191 |            1 |  0.0192641 |      1225.59  |            1108 |          188 |         9327 |        2122.8 |       2540    |       3487.24 |      9.74109 |               2635.93  |           4.24244  |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201008-204751/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                         |     10352.3  |     1001.02 |          5191 |            1 |  0.0192641 |      1994.29  |            1864 |          535 |         9279 |        3136.8 |       3603.4  |       5064.16 |      6.00108 |               1623.85  |           2.61359  |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201008-204751/qgis310-balanced/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                                           |     10508.5  |     1017.63 |          5191 |            1 |  0.0192641 |      2024.37  |            1893 |          629 |        10470 |        3130.6 |       3604.2  |       5050.56 |      5.91143 |               1599.59  |           2.57455  |
| [qgis310-multithread-singleinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201008-204751/qgis310-multithread-singleinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     |     10901    |     1059.37 |          5272 |            0 |  0         |      2067.71  |            1514 |          141 |        12790 |        4058.8 |       5043.05 |       7774.27 |      5.76453 |                274.938 |           2.92018  |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201008-204751/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       |     30529.6  |     3146.97 |          5191 |            1 |  0.0192641 |      5881.26  |            5751 |         2121 |        22874 |        8371   |       9578.6  |      13055.2  |      2.03776 |                551.399 |           0.887485 |

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