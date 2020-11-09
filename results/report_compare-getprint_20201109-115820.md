# QGIS Benchmark summary compare-getprint (20201109-115820)


compare different version of QGIS servers using the same settings

_run completed in 00h 11m 19s_

_Sample size per configuration 63_
## Summary plot
An interactive summary plot can be found [here](report_compare-getprint_20201109-115820_plot.html)

## Summary
| name    | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 | Global  |                 13.7 | +0.0%                        |           74   | +0.0%                  |             376 | +0.0%                   |          102 |         7414 |             18.4 |            63 |            0 |     6455.3 |     5164.1 |     2605.9 |      98.7 |      77.3 |       0.2 |        0   |
| qgis316 | Global  |                139   | +914.6%                      |          805.9 | +988.5%                |            3272 | +770.2%                 |            0 |       120070 |             10.1 |            63 |           19 |     6303.5 |     4527.3 |     3368.1 |      28   |       9.6 |       0.1 |       30.2 |
| qgis310 | Global  |                193.1 | +1309.5%                     |         1418.8 | +1816.4%               |           18974 | +4946.3%                |            1 |       120088 |              9.3 |            63 |           19 |     6207.9 |     3867.8 |     3238.4 |      29.4 |      11   |       0   |       30.2 |

## Aggregated
| name                         | group           |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------|-----------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_fix_print | somap_fix_print |                 13.7 | +0.0%                        |           74   | +0.0%                  |             376 | +0.0%                   |          102 |         7414 |             18.4 |            63 |            0 |     6455.3 |     5164.1 |     2605.9 |      98.7 |      77.3 |       0.2 |        0   |
| qgis316 > somap316_fix_print | somap_fix_print |                139   | +914.6%                      |          805.9 | +988.5%                |            3272 | +770.2%                 |            0 |       120070 |             10.1 |            63 |           19 |     6303.5 |     4527.3 |     3368.1 |      28   |       9.6 |       0.1 |       30.2 |
| qgis310 > somap310_fix_print | somap_fix_print |                193.1 | +1309.5%                     |         1418.8 | +1816.4%               |           18974 | +4946.3%                |            1 |       120088 |              9.3 |            63 |           19 |     6207.9 |     3867.8 |     3238.4 |      29.4 |      11   |       0   |       30.2 |

## Detail
| name                                                                                                                                                            | group                          |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_fix_print > getprint.txt](../results/details/compare-getprint/20201109-115820/qgis218/somap218_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                 13.7 | +0.0%                        |           74   | +0.0%                  |             376 | +0.0%                   |            63 |            0 |     0      |       1175.13 |          102 |         7414 |        4698.6 |        5157.6 |          7414 |     7.73956  |              2319.05   |           6.39792  |             18.4 |     6455.3 |     5164.1 |     2605.9 |      98.7 |      77.3 |       0.2 |
| [qgis316 > somap316_fix_print > getprint.txt](../results/details/compare-getprint/20201109-115820/qgis316/somap316_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                139   | +914.6%                      |          805.9 | +988.5%                |            3272 | +770.2%                 |            63 |           19 |    30.1587 |      12791.4  |            0 |       120070 |       60002   |       60002.8 |        120070 |     0.470599 |                77.0132 |           0.389022 |             10.1 |     6303.5 |     4527.3 |     3368.1 |      28   |       9.6 |       0.1 |
| [qgis310 > somap310_fix_print > getprint.txt](../results/details/compare-getprint/20201109-115820/qgis310/somap310_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                193.1 | +1309.5%                     |         1418.8 | +1816.4%               |           18974 | +4946.3%                |            63 |           19 |    30.1587 |      22520.6  |            1 |       120088 |       60005   |       60007.8 |        120088 |     0.335119 |                50.8175 |           0.277027 |              9.3 |     6207.9 |     3867.8 |     3238.4 |      29.4 |      11   |       0   |

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
description: 'compare different version of QGIS servers using the same settings'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      QGIS_SERVER_IGNORE_BAD_LAYERS: '1'
      PG_SERVICE: 'pg_service.conf'

  qgis218:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_fix_print:
        - getprint.txt

  qgis310:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10-ubuntu'
    projects:
      somap310_fix_print:
        - getprint.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16-ubuntu'
    projects:
      somap316_fix_print:
        - getprint.txt

```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_IGNORE_BAD_LAYERS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_IGNORE_BAD_LAYERS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_fix_print:
      - getprint.txt
    template: docker-compose-qgis-2
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_IGNORE_BAD_LAYERS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: 3.10-ubuntu
    inherit: base
    path-prefix: ogc
    projects:
      somap310_fix_print:
      - getprint.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_IGNORE_BAD_LAYERS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: 3.16-ubuntu
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_fix_print:
      - getprint.txt
    template: docker-compose-qgis-3-nginx

```