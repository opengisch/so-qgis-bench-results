# QGIS Benchmark summary compare-categorized (20201030-090825)


compare categorised rendering on different version of QGIS servers using the same settings

_run completed in 00h 16m 38s_

_Sample size per configuration 5190_
## Summary plot
An interactive summary plot can be found [here](report_compare-categorized_20201030-090825_plot.html)

## Summary
| name          | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |                246.7 | +0.0%                        |         2363.8 | +0.0%                  |           239   | +0.0%                   |           17 |        15196 |          5190 |            0 |     8787.4 |     7750.9 |     4089.6 |      99.4 |      95.2 |      12.7 |          0 |
| qgis316-stock | Global  |                342.3 | +38.8%                       |         3334.4 | +41.1%                 |           348.5 | +45.8%                  |           12 |        22352 |          5190 |            0 |     8107.8 |     7177.1 |     4253.5 |      88.9 |      73.6 |      39.4 |          0 |
| qgis310-stock | Global  |                347.6 | +40.9%                       |         3389.3 | +43.4%                 |           353   | +47.7%                  |           21 |        21273 |          5190 |            0 |     8075.4 |     7177.2 |     4194.3 |      86.1 |      73.3 |      16.6 |          0 |

## Aggregated
| name                                               | group                           |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------------------|---------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |                246.7 | +0.0%                        |         2363.8 | +0.0%                  |           239   | +0.0%                   |           17 |        15196 |          5190 |            0 |     8787.4 |     7750.9 |     4089.6 |      99.4 |      95.2 |      12.7 |          0 |
| qgis316-stock > somap316_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |                342.3 | +38.8%                       |         3334.4 | +41.1%                 |           348.5 | +45.8%                  |           12 |        22352 |          5190 |            0 |     8107.8 |     7177.1 |     4253.5 |      88.9 |      73.6 |      39.4 |          0 |
| qgis310-stock > somap310_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |                347.6 | +40.9%                       |         3389.3 | +43.4%                 |           353   | +47.7%                  |           21 |        21273 |          5190 |            0 |     8075.4 |     7177.2 |     4194.3 |      86.1 |      73.3 |      16.6 |          0 |

## Detail
| name                                                                                                                                                                                                                               | group                                                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201030-090825/qgis218-stock/somap218_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |                246.7 | +0.0%                        |         2363.8 | +0.0%                  |           239   | +0.0%                   |          5190 |            0 |          0 |       455.459 |           17 |        15196 |         717   |       1037.35 |       4803.61 |      21.5751 |                5593.06 |            9.72888 |     8787.4 |     7750.9 |     4089.6 |      99.4 |      95.2 |      12.7 |
| [qgis316-stock > somap316_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201030-090825/qgis316-stock/somap316_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |                342.3 | +38.8%                       |         3334.4 | +41.1%                 |           348.5 | +45.8%                  |          5190 |            0 |          0 |       642.468 |           12 |        22352 |        1101.8 |       1770.45 |       8334.27 |      15.4512 |                4124.16 |            6.96742 |     8107.8 |     7177.1 |     4253.5 |      88.9 |      73.6 |      39.4 |
| [qgis310-stock > somap310_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201030-090825/qgis310-stock/somap310_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |                347.6 | +40.9%                       |         3389.3 | +43.4%                 |           353   | +47.7%                  |          5190 |            0 |          0 |       653.044 |           21 |        21273 |        1105.9 |       1922    |       8389.9  |      15.2017 |                4057.59 |            6.85492 |     8075.4 |     7177.2 |     4194.3 |      86.1 |      73.3 |      16.6 |

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

  qgis316-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_avbobe_farbig_categorized:
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
  qgis316-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.16'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap316_avbobe_farbig_categorized:
      - bodenbedeckung_big.txt
    template: docker-compose-qgis-3-nginx

```