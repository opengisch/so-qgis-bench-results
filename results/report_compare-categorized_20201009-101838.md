# QGIS Benchmark summary compare-categorized (20201009-101838)


compare categorised rendering on different version of QGIS servers using the same settings

_run completed in 906.44s_

## Summary
| name          |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------|--------------|-------------|---------------|--------------|------------|
| qgis218-stock |      2291.84 |        0    |          5191 |            1 |       0.02 |
| qgis310-stock |      3238.67 |       41.31 |          5191 |            1 |       0.02 |
| qgis314-stock |      3278.02 |       43.03 |          5191 |            1 |       0.02 |

## Aggregated
| name                                               |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|----------------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis218-stock > somap218_avbobe_farbig_categorized |      2291.84 |        0    |          5191 |            1 |       0.02 |
| qgis310-stock > somap310_avbobe_farbig_categorized |      3238.67 |       41.31 |          5191 |            1 |       0.02 |
| qgis314-stock > somap314_avbobe_farbig_categorized |      3278.02 |       43.03 |          5191 |            1 |       0.02 |

## Detail
| name                                                                                                                                                                                                                               |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|
| [qgis218-stock > somap218_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201009-101838/qgis218-stock/somap218_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) |      2291.84 |        0    |          5191 |            1 |  0.0192641 |       441.502 |             232 |           17 |        21805 |           686 |         996.6 |       4718.92 |      22.243  |                5765.09 |           10.0299  |
| [qgis310-stock > somap310_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201009-101838/qgis310-stock/somap310_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) |      3238.67 |       41.31 |          5191 |            1 |  0.0192641 |       623.901 |             348 |           20 |        20760 |          1041 |        1716.6 |       7960.6  |      15.9335 |                4252.08 |            7.18478 |
| [qgis314-stock > somap314_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201009-101838/qgis314-stock/somap314_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) |      3278.02 |       43.03 |          5191 |            1 |  0.0192641 |       631.482 |             352 |           16 |        21262 |          1066 |        1782.8 |       8048.56 |      15.7547 |                4204.28 |            7.10417 |

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
description: 'compare categorised rendering on different version of QGIS servers using the same settings'

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
      somap218_avbobe_farbig_categorized:
        - bodenbedeckung_big.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_avbobe_farbig_categorized:
        - bodenbedeckung_big.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_avbobe_farbig_categorized:
        - bodenbedeckung_big.txt

```
### parsed test configurations

```
description: compare categorised rendering on different version of QGIS servers using
  the same settings
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
      somap218_avbobe_farbig_categorized:
      - bodenbedeckung_big.txt
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
      somap310_avbobe_farbig_categorized:
      - bodenbedeckung_big.txt
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
      somap314_avbobe_farbig_categorized:
      - bodenbedeckung_big.txt
    template: docker-compose-qgis-3-nginx

```