# QGIS Benchmark summary compare-categorized (20201103-074854)


compare categorised rendering on different version of QGIS servers using the same settings

_run completed in 00h 16m 33s_

_Sample size per configuration 5190_
## Summary plot
An interactive summary plot can be found [here](report_compare-categorized_20201103-074854_plot.html)

## Summary
| name          | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |                241.4 | +0.0%                        |         2308.8 | +0.0%                  |           234.5 | +0.0%                   |           17 |        13904 |           1313.9 |          5190 |            0 |     7429.5 |     6244.8 |     2491.4 |      99.4 |      94.6 |      11   |          0 |
| qgis310-stock | Global  |                340.1 | +40.9%                       |         3316.9 | +43.7%                 |           357   | +52.2%                  |           19 |        21261 |           1352.8 |          5190 |            0 |     6660   |     5661   |     2602.9 |      85.6 |      74.2 |      17   |          0 |
| qgis316-stock | Global  |                343.8 | +42.4%                       |         3341.5 | +44.7%                 |           340   | +45.0%                  |            9 |        23004 |           1352.8 |          5190 |            0 |     6678.7 |     5675.7 |     2616.9 |      84.1 |      73.9 |      12.7 |          0 |

## Aggregated
| name                                               | group                           |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------------------|---------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |                241.4 | +0.0%                        |         2308.8 | +0.0%                  |           234.5 | +0.0%                   |           17 |        13904 |           1313.9 |          5190 |            0 |     7429.5 |     6244.8 |     2491.4 |      99.4 |      94.6 |      11   |          0 |
| qgis310-stock > somap310_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |                340.1 | +40.9%                       |         3316.9 | +43.7%                 |           357   | +52.2%                  |           19 |        21261 |           1352.8 |          5190 |            0 |     6660   |     5661   |     2602.9 |      85.6 |      74.2 |      17   |          0 |
| qgis316-stock > somap316_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |                343.8 | +42.4%                       |         3341.5 | +44.7%                 |           340   | +45.0%                  |            9 |        23004 |           1352.8 |          5190 |            0 |     6678.7 |     5675.7 |     2616.9 |      84.1 |      73.9 |      12.7 |          0 |

## Detail
| name                                                                                                                                                                                                                               | group                                                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201103-074854/qgis218-stock/somap218_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |                241.4 | +0.0%                        |         2308.8 | +0.0%                  |           234.5 | +0.0%                   |          5190 |            0 |          0 |       444.858 |           17 |        13904 |         689   |       1016.8  |       5051.04 |      22.0668 |                5720.53 |            9.95059 |           1313.9 |     7429.5 |     6244.8 |     2491.4 |      99.4 |      94.6 |      11   |
| [qgis310-stock > somap310_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201103-074854/qgis310-stock/somap310_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |                340.1 | +40.9%                       |         3316.9 | +43.7%                 |           357   | +52.2%                  |          5190 |            0 |          0 |       639.091 |           19 |        21261 |        1088.9 |       1755.35 |       8150.99 |      15.5421 |                4148.45 |            7.0084  |           1352.8 |     6660   |     5661   |     2602.9 |      85.6 |      74.2 |      17   |
| [qgis316-stock > somap316_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201103-074854/qgis316-stock/somap316_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |                343.8 | +42.4%                       |         3341.5 | +44.7%                 |           340   | +45.0%                  |          5190 |            0 |          0 |       643.84  |            9 |        23004 |        1069.8 |       1747.25 |       8572.08 |      15.3953 |                4109.25 |            6.94223 |           1352.8 |     6678.7 |     5675.7 |     2616.9 |      84.1 |      73.9 |      12.7 |

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
      QGIS_REPLICAS: '6'
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