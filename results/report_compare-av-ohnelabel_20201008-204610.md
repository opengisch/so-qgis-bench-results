# QGIS Benchmark summary compare-av-ohnelabel (20201008-204610)

_run completed in 21.36s_

## Summary
| name          |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------|--------------|-------------|---------------|--------------|------------|
| qgis310-stock |         7.92 |        0    |           735 |          735 |        100 |
| qgis314-stock |         7.95 |        0.38 |           735 |          735 |        100 |
| qgis218-stock |         9.68 |       22.22 |           735 |          735 |        100 |

## Aggregated
| name                                                        |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|-------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-stock > somap310_grundplanav_farbig_ohne_labels.qgs |         7.92 |        0    |           735 |          735 |        100 |
| qgis314-stock > somap314_grundplanav_farbig_ohne_labels.qgs |         7.95 |        0.38 |           735 |          735 |        100 |
| qgis218-stock > somap218_grundplanav_farbig_ohne_labels.qgs |         9.68 |       22.22 |           735 |          735 |        100 |

## Detail
| name                                                                                                                                                                                                                              |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|
| [qgis310-stock > somap310_grundplanav_farbig_ohne_labels.qgs > av_f_big.txt](../results/details/compare-av-ohnelabel/20201008-204610/qgis310-stock/somap310_grundplanav_farbig_ohne_labels.qgs/av_f_big.txt/dashboard/index.html) |         7.92 |        0    |           735 |          735 |        100 |       10.7714 |              10 |            5 |           77 |            15 |            17 |         21.64 |      640.802 |                155.19  |            292.153 |
| [qgis314-stock > somap314_grundplanav_farbig_ohne_labels.qgs > av_f_big.txt](../results/details/compare-av-ohnelabel/20201008-204610/qgis314-stock/somap314_grundplanav_farbig_ohne_labels.qgs/av_f_big.txt/dashboard/index.html) |         7.95 |        0.38 |           735 |          735 |        100 |       10.8231 |              11 |            5 |           74 |            14 |            17 |         25.28 |      634.167 |                213.651 |            289.128 |
| [qgis218-stock > somap218_grundplanav_farbig_ohne_labels.qgs > av_f_big.txt](../results/details/compare-av-ohnelabel/20201008-204610/qgis218-stock/somap218_grundplanav_farbig_ohne_labels.qgs/av_f_big.txt/dashboard/index.html) |         9.68 |       22.22 |           735 |          735 |        100 |       13.1741 |               2 |            1 |         1008 |             4 |             5 |        397.56 |      424.12  |                206.143 |            193.364 |

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
description: 'compare rendering with no labels on different version of QGIS servers using the same settings'

test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2

      PG_SERVICE: 'pg_service.conf'


  qgis218-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_grundplanav_farbig_ohne_labels.qgs:
        - av_f_big.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_grundplanav_farbig_ohne_labels.qgs:
        - av_f_big.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_grundplanav_farbig_ohne_labels.qgs:
        - av_f_big.txt

```
### parsed test configurations

```
description: compare rendering with no labels on different version of QGIS servers
  using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
  qgis218-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig_ohne_labels.qgs:
      - av_f_big.txt
    template: docker-compose-qgis-2
  qgis310-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig_ohne_labels.qgs:
      - av_f_big.txt
    template: docker-compose-qgis-3-nginx
  qgis314-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.14'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig_ohne_labels.qgs:
      - av_f_big.txt
    template: docker-compose-qgis-3-nginx

```