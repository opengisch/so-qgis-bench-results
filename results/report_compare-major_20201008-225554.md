# QGIS Benchmark summary compare-major (20201008-225554)

_run completed in 2550.03s_

## Summary
| name          |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------|--------------|-------------|---------------|--------------|------------|
| qgis310-stock |      7908.64 |        0    |         11198 |            1 |       0.01 |
| qgis314-stock |      8118.93 |        2.66 |         11198 |            1 |       0.01 |
| qgis218-stock |      8120.11 |        2.67 |         11198 |           11 |       0.1  |

## Aggregated
| name                                        |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis218-stock > somap218_grundplanav_farbig |       647.67 |        0    |           735 |            0 |       0    |
| qgis310-stock > somap310_grundplanav_farbig |       773.42 |       19.42 |           735 |            0 |       0    |
| qgis314-stock > somap314_grundplanav_farbig |       786.24 |       21.4  |           735 |            0 |       0    |
| qgis310-stock > somap310_lk                 |      1888.45 |      191.58 |          5272 |            0 |       0    |
| qgis314-stock > somap314_lk                 |      1930.29 |      198.04 |          5272 |            0 |       0    |
| qgis218-stock > somap218_lk                 |      2334.67 |      260.47 |          5272 |           10 |       0.19 |
| qgis218-stock > somap218_grundplanav_sw     |      5137.77 |      693.27 |          5191 |            1 |       0.02 |
| qgis310-stock > somap310_grundplanav_sw     |      5246.77 |      710.1  |          5191 |            1 |       0.02 |
| qgis314-stock > somap314_grundplanav_sw     |      5402.4  |      734.13 |          5191 |            1 |       0.02 |

## Detail
| name                                                                                                                                                                                       |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|
| [qgis218-stock > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201008-225554/qgis218-stock/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |       647.67 |        0    |           735 |            0 |  0         |       881.185 |             674 |          219 |         9554 |        1538.2 |       1818.6  |       3238.92 |     11.1034  |               1943.53  |            4.88874 |
| [qgis310-stock > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201008-225554/qgis310-stock/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |       773.42 |       19.42 |           735 |            0 |  0         |      1052.27  |             966 |          176 |         4146 |        1739.2 |       1932.4  |       3257.28 |      9.37524 |               1372.04  |            4.12785 |
| [qgis314-stock > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201008-225554/qgis314-stock/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |       786.24 |       21.4  |           735 |            0 |  0         |      1069.71  |             940 |          202 |         4619 |        1772.4 |       2057.4  |       3024.96 |      9.22961 |               1350.66  |            4.06373 |
| [qgis310-stock > somap310_lk > lk_big.txt](../results/details/compare-major/20201008-225554/qgis310-stock/somap310_lk/lk_big.txt/dashboard/index.html)                                     |      1888.45 |      191.58 |          5272 |            0 |  0         |       358.203 |             189 |           28 |         3575 |         896.4 |       1199    |       2078.35 |     27.6231  |               1317.54  |           13.9932  |
| [qgis314-stock > somap314_lk > lk_big.txt](../results/details/compare-major/20201008-225554/qgis314-stock/somap314_lk/lk_big.txt/dashboard/index.html)                                     |      1930.29 |      198.04 |          5272 |            0 |  0         |       366.141 |             202 |           32 |         4231 |         904   |       1212.4  |       2076.27 |     26.9923  |               1286.83  |           13.6737  |
| [qgis218-stock > somap218_lk > lk_big.txt](../results/details/compare-major/20201008-225554/qgis218-stock/somap218_lk/lk_big.txt/dashboard/index.html)                                     |      2334.67 |      260.47 |          5272 |           10 |  0.189681  |       442.843 |             139 |            5 |        90102 |         729.7 |       1043.35 |       2044.26 |     17.677   |                898.249 |            8.95476 |
| [qgis218-stock > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201008-225554/qgis218-stock/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       |      5137.77 |      693.27 |          5191 |            1 |  0.0192641 |       989.747 |             584 |          221 |        90091 |        2193   |       2688.4  |       5564.32 |     10.0004  |               3113.05  |            4.35538 |
| [qgis310-stock > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201008-225554/qgis310-stock/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       |      5246.77 |      710.1  |          5191 |            1 |  0.0192641 |      1010.74  |             832 |          184 |         6671 |        1856.8 |       2329.4  |       3337.72 |      9.84492 |               2663.91  |            4.28766 |
| [qgis314-stock > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201008-225554/qgis314-stock/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       |      5402.4  |      734.13 |          5191 |            1 |  0.0192641 |      1040.72  |             860 |          192 |         6922 |        1932   |       2404.2  |       3339.32 |      9.56116 |               2587.16  |            4.16407 |

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
description: 'compare different version of QGIS servers using the same settings'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_lk:
        - lk_big.txt
      somap218_grundplanav_farbig:
        - av_f_big.txt
      somap218_grundplanav_sw:
        - av_sw_big.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - lk_big.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw_big.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk_big.txt
      somap314_grundplanav_farbig:
        - av_f_big.txt
      somap314_grundplanav_sw:
        - av_sw_big.txt

  qgis314-standalone:
    active: no
    inherit: qgis314-stock
    template: docker-compose-qgis-3-standalone
    path-prefix: 'ogc'

```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - av_f_big.txt
      somap218_grundplanav_sw:
      - av_sw_big.txt
      somap218_lk:
      - lk_big.txt
    template: docker-compose-qgis-2
  qgis310-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis314-standalone:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis314-stock
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-standalone
  qgis314-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx

```