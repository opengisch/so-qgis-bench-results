# QGIS Benchmark summary compare-deployment (20201009-103437)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 7344.09s_

## Summary
| name                               |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-singlethread-multiinstance |      9531.48 |        0    |         11198 |            1 |       0.01 |
| qgis310-unlimited-threads          |     15379.7  |       61.36 |         11198 |            1 |       0.01 |
| qgis310-balanced                   |     16341.6  |       71.45 |         11198 |            1 |       0.01 |
| qgis310-multithread-singleinstance |     45658.7  |      379.03 |         11198 |            1 |       0.01 |

## Aggregated
| name                                                             |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig |       911.05 |        0    |           735 |            0 |       0    |
| qgis310-unlimited-threads > somap310_grundplanav_farbig          |      1321.38 |       45.04 |           735 |            0 |       0    |
| qgis310-balanced > somap310_grundplanav_farbig                   |      1470.79 |       61.44 |           735 |            0 |       0    |
| qgis310-singlethread-multiinstance > somap310_lk                 |      2276.68 |      149.9  |          5272 |            0 |       0    |
| qgis310-unlimited-threads > somap310_lk                          |      3693.11 |      305.37 |          5272 |            0 |       0    |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig |      3889.91 |      326.97 |           735 |            0 |       0    |
| qgis310-balanced > somap310_lk                                   |      3932.25 |      331.62 |          5272 |            0 |       0    |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     |      6343.75 |      596.31 |          5191 |            1 |       0.02 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              |     10365.2  |     1037.72 |          5191 |            1 |       0.02 |
| qgis310-balanced > somap310_grundplanav_sw                       |     10938.5  |     1100.65 |          5191 |            1 |       0.02 |
| qgis310-multithread-singleinstance > somap310_lk                 |     11021.2  |     1109.73 |          5272 |            0 |       0    |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     |     30747.6  |     3274.96 |          5191 |            1 |       0.02 |

## Detail
| name                                                                                                                                                                                                                                      |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201009-103437/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |       911.05 |        0    |           735 |            0 |  0         |      1239.52  |          1156   |          366 |         4479 |        1878.2 |       2076.8  |       3263.08 |      9.56483 |               1399.79  |           4.21133  |
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201009-103437/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   |      1321.38 |       45.04 |           735 |            0 |  0         |      1797.8   |          1759   |          541 |         4380 |        2462.8 |       2791.2  |       3869.76 |      6.5816  |                963.183 |           2.89783  |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201009-103437/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     |      1470.79 |       61.44 |           735 |            0 |  0         |      2001.07  |          1968   |          725 |         5010 |        2769.4 |       3032.6  |       3958.64 |      5.9311  |                867.995 |           2.61142  |
| [qgis310-singlethread-multiinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201009-103437/qgis310-singlethread-multiinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     |      2276.68 |      149.9  |          5272 |            0 |  0         |       431.843 |           254   |           28 |         4656 |        1048.7 |       1349    |       2117.27 |     27.361   |               1305.06  |          13.8605   |
| [qgis310-unlimited-threads > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201009-103437/qgis310-unlimited-threads/somap310_lk/lk_big.txt/dashboard/index.html)                                                       |      3693.11 |      305.37 |          5272 |            0 |  0         |       700.513 |           535.5 |           34 |         5265 |        1473.7 |       1875    |       2903.24 |     16.9758  |                809.719 |           8.59958  |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201009-103437/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |      3889.91 |      326.97 |           735 |            0 |  0         |      5292.39  |          5440   |         2347 |         8768 |        6608   |       7698.2  |       8289.48 |      2.25147 |                329.496 |           0.991304 |
| [qgis310-balanced > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201009-103437/qgis310-balanced/somap310_lk/lk_big.txt/dashboard/index.html)                                                                         |      3932.25 |      331.62 |          5272 |            0 |  0         |       745.875 |           582   |           29 |         4767 |        1618.4 |       2027.35 |       3087.08 |     15.9486  |                760.696 |           8.0792   |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201009-103437/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       |      6343.75 |      596.31 |          5191 |            1 |  0.0192641 |      1222.07  |          1083   |          198 |         7539 |        2085.4 |       2543    |       3544.16 |      9.77407 |               2644.81  |           4.2568   |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201009-103437/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                         |     10365.2  |     1037.72 |          5191 |            1 |  0.0192641 |      1996.77  |          1854   |          569 |        11594 |        3109.4 |       3571.6  |       5250.6  |      5.99087 |               1621.12  |           2.60914  |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201009-103437/qgis310-balanced/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                                           |     10938.5  |     1100.65 |          5191 |            1 |  0.0192641 |      2107.21  |          1970   |          573 |        11536 |        3307.4 |       3814.6  |       5461.08 |      5.67836 |               1536.52  |           2.47304  |
| [qgis310-multithread-singleinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201009-103437/qgis310-multithread-singleinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     |     11021.2  |     1109.73 |          5272 |            0 |  0         |      2090.52  |          1545.5 |          155 |        12554 |        4103.7 |       5021.1  |       7746.51 |      5.70131 |                271.94  |           2.88815  |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201009-103437/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       |     30747.6  |     3274.96 |          5191 |            1 |  0.0192641 |      5923.25  |          5794   |         2142 |        23411 |        8458.8 |       9686.2  |      13136.3  |      2.02338 |                547.509 |           0.881222 |

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