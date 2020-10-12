# QGIS Benchmark summary compare-categorized (20201012-002800)


compare categorised rendering on different version of QGIS servers using the same settings

_run completed in 00h 14m 53s_
## Summary plot
An interactive summary plot can be found [here](report_compare-categorized_20201012-002800_plot.html)

## Summary
| name          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|---------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |       2198.8 |               0   |          5190 |            0 |          0 |     7811.5 |     6364.3 |         0 |      99.4 |      94.7 |          0 |
| qgis310-stock | Global  |       3230.6 |              46.9 |          5190 |            0 |          0 |     6915.9 |     5732.7 |         0 |      85.3 |      73.1 |          0 |
| qgis314-stock | Global  |       3240.8 |              47.4 |          5190 |            0 |          0 |     6986.9 |     5756.2 |         0 |      88.6 |      73.4 |          0 |

## Aggregated
| name                                               | group                           |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|----------------------------------------------------|---------------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |       2198.8 |               0   |          5190 |            0 |          0 |     7811.5 |     6364.3 |         0 |      99.4 |      94.7 |          0 |
| qgis310-stock > somap310_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |       3230.6 |              46.9 |          5190 |            0 |          0 |     6915.9 |     5732.7 |         0 |      85.3 |      73.1 |          0 |
| qgis314-stock > somap314_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |       3240.8 |              47.4 |          5190 |            0 |          0 |     6986.9 |     5756.2 |         0 |      88.6 |      73.4 |          0 |

## Detail
| name                                                                                                                                                                                                                               | group                                                    |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201012-002800/qgis218-stock/somap218_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |       2198.8 |               0   |          5190 |            0 |          0 |       423.663 |             226 |           18 |        13525 |         670.8 |        969    |       4694.65 |      23.1534 |                6002.22 |           10.4406  |     7811.5 |     6364.3 |     2300.7 |      99.4 |      94.7 |      11.2 |
| [qgis310-stock > somap310_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201012-002800/qgis310-stock/somap310_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |       3230.6 |              46.9 |          5190 |            0 |          0 |       622.466 |             349 |           21 |        20207 |        1059.9 |       1728.35 |       7928.53 |      15.9662 |                4261.64 |            7.19966 |     6915.9 |     5732.7 |     2454.3 |      85.3 |      73.1 |      14.8 |
| [qgis314-stock > somap314_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201012-002800/qgis314-stock/somap314_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |       3240.8 |              47.4 |          5190 |            0 |          0 |       624.435 |             352 |           16 |        20707 |        1075.9 |       1764.9  |       7927.53 |      15.9114 |                4246.9  |            7.17492 |     6986.9 |     5756.2 |     2571.4 |      88.6 |      73.4 |      16   |

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