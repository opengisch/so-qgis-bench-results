# QGIS Benchmark summary compare-rulebased (20201012-091120)


compare rulebased rendering on different version of QGIS servers using the same settings

_run completed in 00h 08m 45s_
## Summary plot
An interactive summary plot can be found [here](report_compare-rulebased_20201012-091120_plot.html)

## Summary
| name          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|---------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |       1299.2 |                 0 |          5190 |            0 |     2447.9 |     7157.7 |     5527.6 |      14   |      99.7 |      98.4 |          0 |
| qgis314-stock | Global  |       1857.3 |                43 |          5190 |            0 |     2567.7 |     6722.3 |     5261.4 |      15.5 |      87.7 |      74.6 |          0 |
| qgis310-stock | Global  |       1857.9 |                43 |          5190 |            0 |     2617.1 |     6733.5 |     5264.7 |      16.5 |      93   |      74.4 |          0 |

## Aggregated
| name                                             | group                         |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|--------------------------------------------------|-------------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |       1299.2 |                 0 |          5190 |            0 |     2447.9 |     7157.7 |     5527.6 |      14   |      99.7 |      98.4 |          0 |
| qgis314-stock > somap314_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |       1857.3 |                43 |          5190 |            0 |     2567.7 |     6722.3 |     5261.4 |      15.5 |      87.7 |      74.6 |          0 |
| qgis310-stock > somap310_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |       1857.9 |                43 |          5190 |            0 |     2617.1 |     6733.5 |     5264.7 |      16.5 |      93   |      74.4 |          0 |

## Detail
| name                                                                                                                                                                                                                         | group                                                  |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201012-091120/qgis218-stock/somap218_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |       1299.2 |                 0 |          5190 |            0 |          0 |       250.324 |             157 |           28 |         2484 |         581.9 |        705    |        961.72 |      39.5362 |                7554.77 |            17.7509 |     7157.7 |     5527.6 |     2447.9 |      99.7 |      98.4 |      14   |
| [qgis314-stock > somap314_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201012-091120/qgis314-stock/somap314_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |       1857.3 |                43 |          5190 |            0 |          0 |       357.857 |             273 |           30 |         2027 |         738.9 |        901.45 |       1232.36 |      27.6853 |                5285.78 |            12.4301 |     6722.3 |     5261.4 |     2567.7 |      87.7 |      74.6 |      15.5 |
| [qgis310-stock > somap310_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201012-091120/qgis310-stock/somap310_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |       1857.9 |                43 |          5190 |            0 |          0 |       357.972 |             276 |           27 |         2061 |         733.9 |        910.35 |       1288.72 |      27.6951 |                5287.8  |            12.4345 |     6733.5 |     5264.7 |     2617.1 |      93   |      74.4 |      16.5 |

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
description: 'compare rulebased rendering on different version of QGIS servers using the same settings'

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
      somap218_avbobe_farbig_rulebased:
        - bodenbedeckung_big.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_avbobe_farbig_rulebased:
        - bodenbedeckung_big.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_avbobe_farbig_rulebased:
        - bodenbedeckung_big.txt

```
### parsed test configurations

```
description: compare rulebased rendering on different version of QGIS servers using
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
      somap218_avbobe_farbig_rulebased:
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
      somap310_avbobe_farbig_rulebased:
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
      somap314_avbobe_farbig_rulebased:
      - bodenbedeckung_big.txt
    template: docker-compose-qgis-3-nginx

```