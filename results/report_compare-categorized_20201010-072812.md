# QGIS Benchmark summary compare-categorized (20201010-072812)


compare categorised rendering on different version of QGIS servers using the same settings

_run completed in 918.58s_

## Summary
| name          |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|---------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis218-stock |      2309.34 |        0    |          5191 |            1 |     8969.8 |     6746.5 |      99.2 |      95.1 |       0.02 |
| qgis310-stock |      3290.62 |       42.49 |          5191 |            1 |     8029.9 |     6100.7 |      87.3 |      72.9 |       0.02 |
| qgis314-stock |      3308.02 |       43.25 |          5191 |            1 |     8110.4 |     6109.8 |      82.5 |      72.4 |       0.02 |

## Aggregated
| name                                               |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|----------------------------------------------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_categorized |      2309.34 |        0    |          5191 |            1 |     8969.8 |     6746.5 |      99.2 |      95.1 |       0.02 |
| qgis310-stock > somap310_avbobe_farbig_categorized |      3290.62 |       42.49 |          5191 |            1 |     8029.9 |     6100.7 |      87.3 |      72.9 |       0.02 |
| qgis314-stock > somap314_avbobe_farbig_categorized |      3308.02 |       43.25 |          5191 |            1 |     8110.4 |     6109.8 |      82.5 |      72.4 |       0.02 |

## Detail
| name                                                                                                                                                                                                                               |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201010-072812/qgis218-stock/somap218_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) |      2309.34 |        0    |          5191 |            1 |  0.0192641 |       444.874 |             235 |           19 |        23176 |         678   |        1043.2 |       4928.4  |      22.0766 |                5721.97 |            9.95486 |     8969.8 |     6746.5 |     2202.7 |      99.2 |      95.1 |      12.7 |
| [qgis310-stock > somap310_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201010-072812/qgis310-stock/somap310_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) |      3290.62 |       42.49 |          5191 |            1 |  0.0192641 |       633.908 |             351 |           15 |        20702 |        1089.8 |        1884   |       8003.96 |      15.6527 |                4177.14 |            7.05815 |     8029.9 |     6100.7 |     2290.5 |      87.3 |      72.9 |      14.8 |
| [qgis314-stock > somap314_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201010-072812/qgis314-stock/somap314_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) |      3308.02 |       43.25 |          5191 |            1 |  0.0192641 |       637.26  |             350 |           18 |        21416 |        1079.8 |        1874.2 |       8040    |      15.6103 |                4165.74 |            7.03905 |     8110.4 |     6109.8 |     2189.1 |      82.5 |      72.4 |      14.9 |

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