# QGIS Benchmark summary compare-categorized (20201111-014821)


compare categorised rendering on different version of QGIS servers using the same settings

_run completed in 00h 15m 43s_

_Sample size per configuration 5190_
## Summary plot
An interactive summary plot can be found [here](report_compare-categorized_20201111-014821_plot.html)

## Summary
| name          | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |            229   | +0.0%                    |               2.6 | +4.0%                     |         2191.6 | +0.0%                  |             228 | +0.0%                   |           18 |        13130 |           1313.9 |          5190 |            0 |     6887.2 |     6111.1 |     3214.7 |      99.8 |      95.4 |      11.4 |          0 |
| qgis316-stock | Global  |            320.1 | +39.8%                   |               2.5 | +0.0%                     |         3119.2 | +42.3%                 |             322 | +41.2%                  |            9 |        21348 |           1352.8 |          5190 |            0 |     5961.5 |     5420.6 |     3426.7 |      85.1 |      73.7 |      17.6 |          0 |
| qgis310-stock | Global  |            327.7 | +43.1%                   |               2.5 | +0.0%                     |         3190.4 | +45.6%                 |             342 | +50.0%                  |           18 |        20228 |           1352.8 |          5190 |            0 |     5956.3 |     5416.4 |     3380.4 |      80.9 |      73.4 |      17.9 |          0 |

## Aggregated
| name                                               | group                           |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------------------|---------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |            229   | +0.0%                    |               2.6 | +4.0%                     |         2191.6 | +0.0%                  |             228 | +0.0%                   |           18 |        13130 |           1313.9 |          5190 |            0 |     6887.2 |     6111.1 |     3214.7 |      99.8 |      95.4 |      11.4 |          0 |
| qgis316-stock > somap316_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |            320.1 | +39.8%                   |               2.5 | +0.0%                     |         3119.2 | +42.3%                 |             322 | +41.2%                  |            9 |        21348 |           1352.8 |          5190 |            0 |     5961.5 |     5420.6 |     3426.7 |      85.1 |      73.7 |      17.6 |          0 |
| qgis310-stock > somap310_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |            327.7 | +43.1%                   |               2.5 | +0.0%                     |         3190.4 | +45.6%                 |             342 | +50.0%                  |           18 |        20228 |           1352.8 |          5190 |            0 |     5956.3 |     5416.4 |     3380.4 |      80.9 |      73.4 |      17.9 |          0 |

## Detail
| name                                                                                                                                                                                                                               | group                                                    |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201111-014821/qgis218-stock/somap218_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |            229   | +0.0%                    |               2.6 | +4.0%                     |         2191.6 | +0.0%                  |             228 | +0.0%                   |          5190 |            0 |          0 |       422.272 |           18 |        13130 |         643   |        985    |       4517.71 |      23.2423 |                6025.25 |           10.4807  |           1313.9 |     6887.2 |     6111.1 |     3214.7 |      99.8 |      95.4 |      11.4 |
| [qgis316-stock > somap316_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201111-014821/qgis316-stock/somap316_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |            320.1 | +39.8%                   |               2.5 | +0.0%                     |         3119.2 | +42.3%                 |             322 | +41.2%                  |          5190 |            0 |          0 |       600.993 |            9 |        21348 |        1037.4 |       1604.8  |       7828.9  |      16.5142 |                4407.89 |            7.44676 |           1352.8 |     5961.5 |     5420.6 |     3426.7 |      85.1 |      73.7 |      17.6 |
| [qgis310-stock > somap310_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201111-014821/qgis310-stock/somap310_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |            327.7 | +43.1%                   |               2.5 | +0.0%                     |         3190.4 | +45.6%                 |             342 | +50.0%                  |          5190 |            0 |          0 |       614.715 |           18 |        20228 |        1036.9 |       1640.05 |       7746.2  |      16.1299 |                4305.34 |            7.27346 |           1352.8 |     5956.3 |     5416.4 |     3380.4 |      80.9 |      73.4 |      17.9 |

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
      QGIS_VERSION: '3.10-ubuntu'
    projects:
      somap310_avbobe_farbig_categorized:
        - bodenbedeckung_big.txt

  qgis316-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.16-ubuntu'
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
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
  qgis218-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
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
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: 3.10-ubuntu
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
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: 3.16-ubuntu
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap316_avbobe_farbig_categorized:
      - bodenbedeckung_big.txt
    template: docker-compose-qgis-3-nginx

```