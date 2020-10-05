# QGIS Benchmark summary compare-310 (20201005-113316)

_run completed in 1618.88s_

## Summary
| name                 |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|----------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-cachesize20  |      9257.77 |        0    |         11198 |           58 |       0.52 |
| qgis310-maxcache20   |      9258.6  |        0.01 |         11198 |           50 |       0.45 |
| qgis310-maxcache200  |      9273.41 |        0.17 |         11198 |           42 |       0.38 |
| qgis310-cachesize200 |      9277.49 |        0.21 |         11198 |           49 |       0.44 |
| qgis310-nossl        |      9288.26 |        0.33 |         11198 |           83 |       0.74 |
| qgis310-stock        |      9393.07 |        1.46 |         11198 |           54 |       0.48 |

## Aggregated
| name                                               |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|----------------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-maxcache200 > somap310_grundplanav_farbig  |       951.65 |        0    |           735 |            3 |       0.41 |
| qgis310-cachesize200 > somap310_grundplanav_farbig |       961.79 |        1.07 |           735 |            0 |       0    |
| qgis310-maxcache20 > somap310_grundplanav_farbig   |       963.8  |        1.28 |           735 |            5 |       0.68 |
| qgis310-cachesize20 > somap310_grundplanav_farbig  |       966.13 |        1.52 |           735 |            5 |       0.68 |
| qgis310-nossl > somap310_grundplanav_farbig        |       969.3  |        1.85 |           735 |            6 |       0.82 |
| qgis310-stock > somap310_grundplanav_farbig        |      1030.86 |        8.32 |           735 |            7 |       0.95 |
| qgis310-cachesize200 > somap310_lk                 |      2129.03 |      123.72 |          5272 |            2 |       0.04 |
| qgis310-maxcache200 > somap310_lk                  |      2135.38 |      124.39 |          5272 |            1 |       0.02 |
| qgis310-cachesize20 > somap310_lk                  |      2144.76 |      125.37 |          5272 |            1 |       0.02 |
| qgis310-nossl > somap310_lk                        |      2153.6  |      126.3  |          5272 |            4 |       0.08 |
| qgis310-maxcache20 > somap310_lk                   |      2160.95 |      127.07 |          5272 |            1 |       0.02 |
| qgis310-stock > somap310_lk                        |      2206.81 |      131.89 |          5272 |            1 |       0.02 |
| qgis310-maxcache20 > somap310_grundplanav_sw       |      6133.85 |      544.55 |          5191 |           44 |       0.85 |
| qgis310-cachesize20 > somap310_grundplanav_sw      |      6146.88 |      545.92 |          5191 |           52 |       1    |
| qgis310-stock > somap310_grundplanav_sw            |      6155.4  |      546.81 |          5191 |           46 |       0.89 |
| qgis310-nossl > somap310_grundplanav_sw            |      6165.36 |      547.86 |          5191 |           73 |       1.41 |
| qgis310-maxcache200 > somap310_grundplanav_sw      |      6186.38 |      550.07 |          5191 |           38 |       0.73 |
| qgis310-cachesize200 > somap310_grundplanav_sw     |      6186.67 |      550.1  |          5191 |           47 |       0.91 |

## Detail
| name                                                              |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec | dashboard                                                                                                                                    |
|-------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| qgis310-maxcache200 > somap310_grundplanav_farbig > av_f_big.txt  |       951.65 |        0    |           735 |            3 |  0.408163  |      1294.76  |            1203 |          399 |         6468 |        1748.4 |       2874    |       3698.32 |      28.9804 |                4226.53 |            12.7598 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-maxcache200/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)  |
| qgis310-cachesize200 > somap310_grundplanav_farbig > av_f_big.txt |       961.79 |        1.07 |           735 |            0 |  0         |      1308.56  |            1206 |          470 |         6589 |        1784   |       2890    |       3883.28 |      29.1875 |                4271.54 |            12.8511 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-cachesize200/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |
| qgis310-maxcache20 > somap310_grundplanav_farbig > av_f_big.txt   |       963.8  |        1.28 |           735 |            5 |  0.680272  |      1311.3   |            1230 |          484 |         5981 |        1805   |       2913.8  |       3883.04 |      28.9279 |                4227.91 |            12.7367 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-maxcache20/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)   |
| qgis310-cachesize20 > somap310_grundplanav_farbig > av_f_big.txt  |       966.13 |        1.52 |           735 |            5 |  0.680272  |      1314.47  |            1230 |          475 |         5901 |        1774.8 |       2939    |       3806.08 |      28.9758 |                4179.86 |            12.7578 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-cachesize20/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)  |
| qgis310-nossl > somap310_grundplanav_farbig > av_f_big.txt        |       969.3  |        1.85 |           735 |            6 |  0.816327  |      1318.78  |            1254 |          466 |         6413 |        1781.8 |       2683.4  |       3916.56 |      29.1748 |                4250.7  |            12.8454 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-nossl/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)        |
| qgis310-stock > somap310_grundplanav_farbig > av_f_big.txt        |      1030.86 |        8.32 |           735 |            7 |  0.952381  |      1402.53  |            1338 |          437 |         6157 |        1955.4 |       3026.8  |       4081.28 |      27.2051 |                3970.06 |            11.9782 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-stock/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)        |
| qgis310-cachesize200 > somap310_lk > lk_big.txt                   |      2129.03 |      123.72 |          5272 |            2 |  0.0379363 |       403.837 |             272 |           29 |         2999 |         931.7 |       1177    |       1820.35 |      95.4554 |                4542.22 |            48.3555 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-cachesize200/somap310_lk/lk_big.txt/dashboard/index.html)                   |
| qgis310-maxcache200 > somap310_lk > lk_big.txt                    |      2135.38 |      124.39 |          5272 |            1 |  0.0189681 |       405.041 |             275 |           27 |         3134 |         948.7 |       1190.05 |       1793.78 |      95.3915 |                4546.56 |            48.3232 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-maxcache200/somap310_lk/lk_big.txt/dashboard/index.html)                    |
| qgis310-cachesize20 > somap310_lk > lk_big.txt                    |      2144.76 |      125.37 |          5272 |            1 |  0.0189681 |       406.822 |             267 |           29 |         2959 |         958.7 |       1215.7  |       1796.05 |      95.3518 |                4546.31 |            48.3031 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-cachesize20/somap310_lk/lk_big.txt/dashboard/index.html)                    |
| qgis310-nossl > somap310_lk > lk_big.txt                          |      2153.6  |      126.3  |          5272 |            4 |  0.0758725 |       408.497 |             274 |           29 |         3362 |         951.4 |       1195    |       1844.35 |      95.1264 |                4522.59 |            48.1889 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-nossl/somap310_lk/lk_big.txt/dashboard/index.html)                          |
| qgis310-maxcache20 > somap310_lk > lk_big.txt                     |      2160.95 |      127.07 |          5272 |            1 |  0.0189681 |       409.892 |             276 |           28 |         3736 |         957.4 |       1202.35 |       1810.78 |      92.7957 |                4425.17 |            47.0082 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-maxcache20/somap310_lk/lk_big.txt/dashboard/index.html)                     |
| qgis310-stock > somap310_lk > lk_big.txt                          |      2206.81 |      131.89 |          5272 |            1 |  0.0189681 |       418.59  |             273 |           27 |         3494 |         987.7 |       1250.4  |       2067.43 |      91.45   |                4357.23 |            46.3265 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-stock/somap310_lk/lk_big.txt/dashboard/index.html)                          |
| qgis310-maxcache20 > somap310_grundplanav_sw > av_sw_big.txt      |      6133.85 |      544.55 |          5191 |           44 |  0.847621  |      1181.63  |            1034 |          202 |         6830 |        1966   |       2378    |       3707.6  |      33.3899 |                8928.75 |            14.542  | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-maxcache20/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)      |
| qgis310-cachesize20 > somap310_grundplanav_sw > av_sw_big.txt     |      6146.88 |      545.92 |          5191 |           52 |  1.00173   |      1184.14  |            1043 |          236 |         7000 |        1961.8 |       2383.8  |       3785.88 |      33.3077 |                8888.82 |            14.5062 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-cachesize20/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)     |
| qgis310-stock > somap310_grundplanav_sw > av_sw_big.txt           |      6155.4  |      546.81 |          5191 |           46 |  0.886149  |      1185.78  |            1042 |          203 |         6540 |        1968.8 |       2361.4  |       3690.28 |      33.2865 |                8933.49 |            14.4969 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-stock/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)           |
| qgis310-nossl > somap310_grundplanav_sw > av_sw_big.txt           |      6165.36 |      547.86 |          5191 |           73 |  1.40628   |      1187.7   |            1034 |          223 |         7059 |        1960.2 |       2387    |       3845.12 |      33.1937 |                8792.04 |            14.4565 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-nossl/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)           |
| qgis310-maxcache200 > somap310_grundplanav_sw > av_sw_big.txt     |      6186.38 |      550.07 |          5191 |           38 |  0.732036  |      1191.75  |            1046 |          201 |         7221 |        1981.8 |       2374.6  |       3771.56 |      33.0934 |                8847.28 |            14.4128 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-maxcache200/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)     |
| qgis310-cachesize200 > somap310_grundplanav_sw > av_sw_big.txt    |      6186.67 |      550.1  |          5191 |           47 |  0.905413  |      1191.81  |            1047 |          234 |         6890 |        1983   |       2377.4  |       3803.04 |      33.1111 |                8810.56 |            14.4206 | [JMeter dashboard](./results/compare-310/20201005-113316/qgis310-cachesize200/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)    |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/marco/so.ch/so-qgis-bench/./logs/prepared/
reports-dir: ./reports/
result-dir: /home/marco/so.ch/so-qgis-bench/./results/

```
### test configurations

```
# this file includes the test cases

test-cases:

  qgis310-stock:
    active: yes
    parallel_requests: 40
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '20'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '4'
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

  qgis310-maxcache20:
    inherit: qgis310-stock
    compose-variables:
      QGIS_MAX_CACHE_LAYERS: '20'

  qgis310-maxcache200:
    inherit: qgis310-stock
    compose-variables:
      QGIS_MAX_CACHE_LAYERS: '200'

  qgis310-cachesize20:
    inherit: qgis310-stock
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '20'

  qgis310-cachesize200:
    inherit: qgis310-stock
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '200'

  qgis310-nossl:
    inherit: qgis310-stock
    compose-variables:
      PG_SERVICE: 'pg_service_nossl.conf'

```
### parsed test configurations

```
test-cases:
  qgis310-cachesize20:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '20'
      QGIS_SERVER_CACHE_SIZE: '20'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-stock
    parallel_requests: 40
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis310-cachesize200:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '20'
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-stock
    parallel_requests: 40
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis310-maxcache20:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '20'
      QGIS_REPLICAS: '20'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-stock
    parallel_requests: 40
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis310-maxcache200:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '200'
      QGIS_REPLICAS: '20'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-stock
    parallel_requests: 40
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis310-nossl:
    active: true
    compose-variables:
      PG_SERVICE: pg_service_nossl.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '20'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-stock
    parallel_requests: 40
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis310-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '20'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    parallel_requests: 40
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
