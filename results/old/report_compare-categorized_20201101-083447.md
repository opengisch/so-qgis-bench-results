# QGIS Benchmark summary compare-categorized (20201101-083447)


compare categorised rendering on different version of QGIS servers using the same settings

_run completed in 00h 16m 14s_

_Sample size per configuration 5190_
## Summary plot
An interactive summary plot can be found [here](report_compare-categorized_20201101-083447_plot.html)

## Summary
| name          | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |                238.9 | +0.0%                        |         2283.5 | +0.0%                  |             234 | +0.0%                   |           17 |        13411 |          5190 |            0 |     9623.5 |     8516   |     4908.2 |      99.4 |      95.2 |      13.1 |          0 |
| qgis316-stock | Global  |                337.1 | +41.1%                       |         3294.6 | +44.3%                 |             340 | +45.3%                  |           11 |        22319 |          5190 |            0 |     8677.8 |     7845   |     5050   |      94   |      73.3 |      61.7 |          0 |
| qgis310-stock | Global  |                338.8 | +41.8%                       |         3306.5 | +44.8%                 |             350 | +49.6%                  |           20 |        20697 |          5190 |            0 |     8672.6 |     7821.8 |     4955.9 |      89   |      73.8 |      41.9 |          0 |

## Aggregated
| name                                               | group                           |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------------------|---------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |                238.9 | +0.0%                        |         2283.5 | +0.0%                  |             234 | +0.0%                   |           17 |        13411 |          5190 |            0 |     9623.5 |     8516   |     4908.2 |      99.4 |      95.2 |      13.1 |          0 |
| qgis316-stock > somap316_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |                337.1 | +41.1%                       |         3294.6 | +44.3%                 |             340 | +45.3%                  |           11 |        22319 |          5190 |            0 |     8677.8 |     7845   |     5050   |      94   |      73.3 |      61.7 |          0 |
| qgis310-stock > somap310_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |                338.8 | +41.8%                       |         3306.5 | +44.8%                 |             350 | +49.6%                  |           20 |        20697 |          5190 |            0 |     8672.6 |     7821.8 |     4955.9 |      89   |      73.8 |      41.9 |          0 |

## Detail
| name                                                                                                                                                                                                                               | group                                                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201101-083447/qgis218-stock/somap218_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |                238.9 | +0.0%                        |         2283.5 | +0.0%                  |             234 | +0.0%                   |          5190 |            0 |          0 |       439.973 |           17 |        13411 |         688.8 |       1073.45 |       4823.96 |      22.2881 |                5777.89 |           10.0504  |     9623.5 |     8516   |     4908.2 |      99.4 |      95.2 |      13.1 |
| [qgis316-stock > somap316_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201101-083447/qgis316-stock/somap316_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |                337.1 | +41.1%                       |         3294.6 | +44.3%                 |             340 | +45.3%                  |          5190 |            0 |          0 |       634.807 |           11 |        22319 |        1090.3 |       1803.25 |       8417.35 |      15.6758 |                4184.11 |            7.06871 |     8677.8 |     7845   |     5050   |      94   |      73.3 |      61.7 |
| [qgis310-stock > somap310_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201101-083447/qgis310-stock/somap310_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |                338.8 | +41.8%                       |         3306.5 | +44.8%                 |             350 | +49.6%                  |          5190 |            0 |          0 |       637.095 |           20 |        20697 |        1101.7 |       1757.4  |       8000.13 |      15.5976 |                4163.27 |            7.03345 |     8672.6 |     7821.8 |     4955.9 |      89   |      73.8 |      41.9 |

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