# QGIS Benchmark summary compare-categorized (20201013-234812)


compare categorised rendering on different version of QGIS servers using the same settings

_run completed in 00h 14m 59s_
## Summary plot
An interactive summary plot can be found [here](report_compare-categorized_20201013-234812_plot.html)

## Summary
| name          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |       2202.6 |               0   |          5190 |            0 |     7415.5 |     6341.3 |     2583.9 |      99.5 |      94.8 |      12.4 |          0 |
| qgis314-stock | Global  |       3241.7 |              47.2 |          5190 |            0 |     6564.8 |     5686.5 |     2747.4 |      88.1 |      74   |      15.2 |          0 |
| qgis310-stock | Global  |       3268.2 |              48.4 |          5190 |            0 |     6529.7 |     5653.2 |     2740.7 |      87.3 |      73.1 |      14.8 |          0 |

## Aggregated
| name                                               | group                           |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------------------|---------------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |       2202.6 |               0   |          5190 |            0 |     7415.5 |     6341.3 |     2583.9 |      99.5 |      94.8 |      12.4 |          0 |
| qgis314-stock > somap314_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |       3241.7 |              47.2 |          5190 |            0 |     6564.8 |     5686.5 |     2747.4 |      88.1 |      74   |      15.2 |          0 |
| qgis310-stock > somap310_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |       3268.2 |              48.4 |          5190 |            0 |     6529.7 |     5653.2 |     2740.7 |      87.3 |      73.1 |      14.8 |          0 |

## Detail
| name                                                                                                                                                                                                                               | group                                                    |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201013-234812/qgis218-stock/somap218_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |       2202.6 |               0   |          5190 |            0 |          0 |       424.386 |             228 |           18 |        15092 |         662.9 |        974.9  |       4647.4  |      23.0876 |                5985.16 |           10.4109  |     7415.5 |     6341.3 |     2583.9 |      99.5 |      94.8 |      12.4 |
| [qgis314-stock > somap314_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201013-234812/qgis314-stock/somap314_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |       3241.7 |              47.2 |          5190 |            0 |          0 |       624.609 |             349 |           19 |        20734 |        1119.9 |       1743.7  |       8026.07 |      15.8876 |                4240.56 |            7.1642  |     6564.8 |     5686.5 |     2747.4 |      88.1 |      74   |      15.2 |
| [qgis310-stock > somap310_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201013-234812/qgis310-stock/somap310_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |       3268.2 |              48.4 |          5190 |            0 |          0 |       629.716 |             347 |           19 |        20702 |        1105   |       1648.35 |       7987.31 |      15.7734 |                4210.17 |            7.11271 |     6529.7 |     5653.2 |     2740.7 |      87.3 |      73.1 |      14.8 |

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