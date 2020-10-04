# QGIS Benchmark summary 20201004-163413

_run completed in 102.33000000000001s_

## Summary
| name          |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------|--------------|-------------|---------------|--------------|------------|
| qgis218-stock |        54.76 |        0    |            72 |            0 |          0 |
| qgis310-stock |        64.37 |       17.55 |            72 |            0 |          0 |
| qgis314-stock |        78.75 |       43.81 |            72 |            0 |          0 |

## Aggregated
| name                                        |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis218-stock > somap218_lk                 |         4.65 |        0    |            30 |            0 |          0 |
| qgis310-stock > somap310_lk                 |         5.36 |       15.27 |            30 |            0 |          0 |
| qgis314-stock > somap314_lk                 |         7.65 |       64.52 |            30 |            0 |          0 |
| qgis218-stock > somap218_grundplanav_farbig |        21.79 |      368.6  |            22 |            0 |          0 |
| qgis310-stock > somap310_grundplanav_farbig |        27.22 |      485.38 |            22 |            0 |          0 |
| qgis218-stock > somap218_grundplanav_sw     |        28.32 |      509.03 |            20 |            0 |          0 |
| qgis310-stock > somap310_grundplanav_sw     |        31.79 |      583.66 |            20 |            0 |          0 |
| qgis314-stock > somap314_grundplanav_sw     |        32.74 |      604.09 |            20 |            0 |          0 |
| qgis314-stock > somap314_grundplanav_farbig |        38.36 |      724.95 |            22 |            0 |          0 |

## Detail
| name                                                   |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec | dashboard                                                                                                   |
|--------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|-------------------------------------------------------------------------------------------------------------|
| qgis218-stock > somap218_lk > lk.txt                   |         4.65 |        0    |            30 |            0 |          0 |       154.933 |           153   |           96 |          226 |         205.6 |        220.5  |           226 |     19.5312  |                530.081 |           7.96763  | ./results/mini-test/20201004-163413/qgis218-stock/somap218_lk/lk.txt/dashboard/index.html                   |
| qgis310-stock > somap310_lk > lk.txt                   |         5.36 |       15.27 |            30 |            0 |          0 |       178.633 |           120.5 |           82 |          747 |         387.4 |        710.7  |           747 |     17.8891  |                484.899 |           7.29772  | ./results/mini-test/20201004-163413/qgis310-stock/somap310_lk/lk.txt/dashboard/index.html                   |
| qgis314-stock > somap314_lk > lk.txt                   |         7.65 |       64.52 |            30 |            0 |          0 |       254.933 |           217.5 |          151 |          553 |         374.4 |        509    |           553 |     13.2159  |                358.15  |           5.39131  | ./results/mini-test/20201004-163413/qgis314-stock/somap314_lk/lk.txt/dashboard/index.html                   |
| qgis218-stock > somap218_grundplanav_farbig > av_f.txt |        21.79 |      368.6  |            22 |            0 |          0 |       990.318 |           810   |          395 |         1876 |        1797.3 |       1866.85 |          1876 |      3.35673 |                530.921 |           1.43042  | ./results/mini-test/20201004-163413/qgis218-stock/somap218_grundplanav_farbig/av_f.txt/dashboard/index.html |
| qgis310-stock > somap310_grundplanav_farbig > av_f.txt |        27.22 |      485.38 |            22 |            0 |          0 |      1237.09  |          1001.5 |          724 |         2266 |        2239.5 |       2262.7  |          2266 |      2.94433 |                383.915 |           1.25468  | ./results/mini-test/20201004-163413/qgis310-stock/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html |
| qgis218-stock > somap218_grundplanav_sw > av_s.txt     |        28.32 |      509.03 |            20 |            0 |          0 |      1416.2   |          1091.5 |          352 |         4219 |        3394.9 |       4180.15 |          4219 |      2.47985 |                888.931 |           1.03844  | ./results/mini-test/20201004-163413/qgis218-stock/somap218_grundplanav_sw/av_s.txt/dashboard/index.html     |
| qgis310-stock > somap310_grundplanav_sw > av_s.txt     |        31.79 |      583.66 |            20 |            0 |          0 |      1589.25  |          1115   |          377 |         4205 |        3810.6 |       4190.3  |          4205 |      2.31508 |                720.333 |           0.969441 | ./results/mini-test/20201004-163413/qgis310-stock/somap310_grundplanav_sw/av_s.txt/dashboard/index.html     |
| qgis314-stock > somap314_grundplanav_sw > av_s.txt     |        32.74 |      604.09 |            20 |            0 |          0 |      1637.15  |          1070   |          378 |         4178 |        3917.8 |       4168.65 |          4178 |      2.18651 |                680.314 |           0.915601 | ./results/mini-test/20201004-163413/qgis314-stock/somap314_grundplanav_sw/av_s.txt/dashboard/index.html     |
| qgis314-stock > somap314_grundplanav_farbig > av_f.txt |        38.36 |      724.95 |            22 |            0 |          0 |      1743.64  |          1783.5 |         1138 |         2413 |        2200.2 |       2383.6  |          2413 |      2.07312 |                270.305 |           0.883434 | ./results/mini-test/20201004-163413/qgis314-stock/somap314_grundplanav_farbig/av_f.txt/dashboard/index.html |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/marco/so.ch/qgis_benchmarking/so-qgis-bench/./logs/prepared/
reports-dir: ./reports/
result-dir: /home/marco/so.ch/qgis_benchmarking/so-qgis-bench/./results/

```
### test configurations

```
# this file includes the test cases

test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '2'
      QGIS_MAX_CACHE_LAYERS: '100'
      PG_SERVICE: 'pg_service.conf'

  qgis218-stock:
    active: yes
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    compose-variables:
      QGIS_VERSION: '2.18'
      QGIS_REPLICAS: '2'
      QGIS_FCGI_PROCESSES: '2'
      QGIS_MAX_CACHE_LAYERS: '100'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap218_lk:
        - lk.txt
      somap218_grundplanav_farbig:
        - av_f.txt
      somap218_grundplanav_sw:
        - av_s.txt

  qgis310-stock:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_lk:
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f.txt
      somap310_grundplanav_sw:
        - av_s.txt

  qgis314-stock:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.14'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap314_lk:
        - lk.txt
      somap314_grundplanav_farbig:
        - av_f.txt
      somap314_grundplanav_sw:
        - av_s.txt

```
### parsed test configurations

```
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
  qgis218-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '2'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_VERSION: '2.18'
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - av_f.txt
      somap218_grundplanav_sw:
      - av_s.txt
      somap218_lk:
      - lk.txt
    template: docker-compose-qgis-2
  qgis310-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_s.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis314-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f.txt
      somap314_grundplanav_sw:
      - av_s.txt
      somap314_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```