# QGIS Benchmark summary compare-major (20201009-124338)


compare different version of QGIS servers using the same settings

_run completed in 2584.3s_

## Summary
| name               |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|--------------------|--------------|-------------|---------------|--------------|------------|
| qgis314-standalone |       141.21 |        0    |         11198 |        11198 |     100    |
| qgis314-stock      |      7962.34 |     5538.65 |         11198 |            1 |       0.01 |
| qgis218-stock      |      8074.19 |     5617.86 |         11198 |           11 |       0.1  |
| qgis310-stock      |      8113.58 |     5645.75 |         11198 |            1 |       0.01 |

## Aggregated
| name                                             |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|--------------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis314-standalone > somap314_grundplanav_farbig |         9.04 |        0    |           735 |          735 |     100    |
| qgis314-standalone > somap314_grundplanav_sw     |        65    |      619.03 |          5191 |         5191 |     100    |
| qgis314-standalone > somap314_lk                 |        67.17 |      643.03 |          5272 |         5272 |     100    |
| qgis218-stock > somap218_grundplanav_farbig      |       633.64 |     6909.29 |           735 |            0 |       0    |
| qgis314-stock > somap314_grundplanav_farbig      |       752.6  |     8225.22 |           735 |            0 |       0    |
| qgis310-stock > somap310_grundplanav_farbig      |       790.84 |     8648.23 |           735 |            0 |       0    |
| qgis314-stock > somap314_lk                      |      1885.77 |    20760.3  |          5272 |            0 |       0    |
| qgis310-stock > somap310_lk                      |      1888.17 |    20786.8  |          5272 |            0 |       0    |
| qgis218-stock > somap218_lk                      |      2339.66 |    25781.2  |          5272 |           10 |       0.19 |
| qgis218-stock > somap218_grundplanav_sw          |      5100.89 |    56325.8  |          5191 |            1 |       0.02 |
| qgis314-stock > somap314_grundplanav_sw          |      5323.97 |    58793.5  |          5191 |            1 |       0.02 |
| qgis310-stock > somap310_grundplanav_sw          |      5434.57 |    60016.9  |          5191 |            1 |       0.02 |

## Detail
| name                                                                                                                                                                                                 |   duration s |   penalty % |   sampleCount |   errorCount |    errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|-------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|
| [qgis314-standalone > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201009-124338/qgis314-standalone/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |         9.04 |        0    |           735 |          735 | 100         |       12.2993 |              10 |            6 |           72 |          19   |          23   |         33.64 |    577.83    |                151.229 |          254.414   |
| [qgis314-standalone > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201009-124338/qgis314-standalone/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       |        65    |      619.03 |          5191 |         5191 | 100         |       12.5223 |              11 |            6 |           82 |          19   |          23   |         32.08 |    745.405   |                195.086 |          324.639   |
| [qgis314-standalone > somap314_lk > lk_big.txt](../results/details/compare-major/20201009-124338/qgis314-standalone/somap314_lk/lk_big.txt/dashboard/index.html)                                     |        67.17 |      643.03 |          5272 |         5272 | 100         |       12.7415 |              11 |            6 |           69 |          20   |          24   |         34    |    728.277   |                190.604 |          368.929   |
| [qgis218-stock > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201009-124338/qgis218-stock/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           |       633.64 |     6909.29 |           735 |            0 |   0         |      862.095  |             669 |          220 |         9122 |        1513.8 |        1770.8 |       3152.52 |     11.3837  |               1992.2   |            5.01216 |
| [qgis314-stock > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201009-124338/qgis314-stock/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           |       752.6  |     8225.22 |           735 |            0 |   0         |     1023.94   |             898 |          200 |         4523 |        1786.2 |        2080.2 |       2951.84 |      9.64162 |               1410.95  |            4.24514 |
| [qgis310-stock > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201009-124338/qgis310-stock/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           |       790.84 |     8648.23 |           735 |            0 |   0         |     1075.97   |            1004 |          189 |         3730 |        1714   |        1931.4 |       3357.88 |      9.16596 |               1341.41  |            4.03571 |
| [qgis314-stock > somap314_lk > lk_big.txt](../results/details/compare-major/20201009-124338/qgis314-stock/somap314_lk/lk_big.txt/dashboard/index.html)                                               |      1885.77 |    20760.3  |          5272 |            0 |   0         |      357.695  |             198 |           33 |         3685 |         846.7 |        1168.7 |       1831.75 |     27.6533  |               1318.37  |           14.0086  |
| [qgis310-stock > somap310_lk > lk_big.txt](../results/details/compare-major/20201009-124338/qgis310-stock/somap310_lk/lk_big.txt/dashboard/index.html)                                               |      1888.17 |    20786.8  |          5272 |            0 |   0         |      358.151  |             181 |           28 |         4128 |         889.7 |        1196   |       1925.43 |     27.4463  |               1309.08  |           13.9037  |
| [qgis218-stock > somap218_lk > lk_big.txt](../results/details/compare-major/20201009-124338/qgis218-stock/somap218_lk/lk_big.txt/dashboard/index.html)                                               |      2339.66 |    25781.2  |          5272 |           10 |   0.189681  |      443.791  |             135 |            5 |        90101 |         727.7 |        1051.4 |       2126.54 |     17.6666  |                897.724 |            8.94948 |
| [qgis218-stock > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201009-124338/qgis218-stock/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 |      5100.89 |    56325.8  |          5191 |            1 |   0.0192641 |      982.641  |             578 |          215 |        90090 |        2182   |        2733.2 |       5348.76 |     10.0701  |               3134.83  |            4.38573 |
| [qgis314-stock > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201009-124338/qgis314-stock/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 |      5323.97 |    58793.5  |          5191 |            1 |   0.0192641 |     1025.62   |             853 |          189 |         9129 |        1908.8 |        2369.4 |       3283.88 |      9.71632 |               2629.1   |            4.23165 |
| [qgis310-stock > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201009-124338/qgis310-stock/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 |      5434.57 |    60016.9  |          5191 |            1 |   0.0192641 |     1046.92   |             876 |          177 |         6924 |        1934.6 |        2417   |       3530.84 |      9.50565 |               2572.1   |            4.1399  |

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
    active: yes
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