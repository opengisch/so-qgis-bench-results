# QGIS Benchmark summary compare-getprint (20201111-053952)


compare different version of QGIS servers using the same settings

_run completed in 00h 10m 28s_

_Sample size per configuration 63_
## Summary plot
An interactive summary plot can be found [here](report_compare-getprint_20201111-053952_plot.html)

## Summary
| name    | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 | Global  |             14.8 | +0.0%                    |              90.1 | +43.9%                    |           80.8 | +0.0%                  |             344 | +0.0%                   |          115 |         8373 |             18.4 |            63 |            0 |     6319.6 |     4876.8 |     2534.4 |      96.7 |      70.8 |      12.2 |        0   |
| qgis316 | Global  |            139.1 | +839.9%                  |              62.6 | +0.0%                     |          805.8 | +897.4%                |            3341 | +871.2%                 |            1 |       120043 |             10.1 |            63 |           19 |     5929.7 |     4186.4 |     3006.6 |      32.4 |       9.9 |       0   |       30.2 |
| qgis310 | Global  |            195.6 | +1221.6%                 |              68   | +8.6%                     |         1444.8 | +1688.4%               |           19550 | +5583.1%                |            1 |       120074 |              9.3 |            63 |           19 |     5892.1 |     3559.1 |     2949.2 |      27.8 |      11.2 |       0   |       30.2 |

## Aggregated
| name                         | group           |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------|-----------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_fix_print | somap_fix_print |             14.8 | +0.0%                    |              90.1 | +43.9%                    |           80.8 | +0.0%                  |             344 | +0.0%                   |          115 |         8373 |             18.4 |            63 |            0 |     6319.6 |     4876.8 |     2534.4 |      96.7 |      70.8 |      12.2 |        0   |
| qgis316 > somap316_fix_print | somap_fix_print |            139.1 | +839.9%                  |              62.6 | +0.0%                     |          805.8 | +897.4%                |            3341 | +871.2%                 |            1 |       120043 |             10.1 |            63 |           19 |     5929.7 |     4186.4 |     3006.6 |      32.4 |       9.9 |       0   |       30.2 |
| qgis310 > somap310_fix_print | somap_fix_print |            195.6 | +1221.6%                 |              68   | +8.6%                     |         1444.8 | +1688.4%               |           19550 | +5583.1%                |            1 |       120074 |              9.3 |            63 |           19 |     5892.1 |     3559.1 |     2949.2 |      27.8 |      11.2 |       0   |       30.2 |

## Detail
| name                                                                                                                                                            | group                          |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_fix_print > getprint.txt](../results/details/compare-getprint/20201111-053952/qgis218/somap218_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |             14.8 | +0.0%                    |              90.1 | +43.9%                    |           80.8 | +0.0%                  |             344 | +0.0%                   |            63 |            0 |     0      |       1282.35 |          115 |         8373 |        4592.6 |        7268.6 |          8373 |     6.91244  |              2069.97   |           5.71419  |             18.4 |     6319.6 |     4876.8 |     2534.4 |      96.7 |      70.8 |      12.2 |
| [qgis316 > somap316_fix_print > getprint.txt](../results/details/compare-getprint/20201111-053952/qgis316/somap316_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |            139.1 | +839.9%                  |              62.6 | +0.0%                     |          805.8 | +897.4%                |            3341 | +871.2%                 |            63 |           19 |    30.1587 |      12790.6  |            1 |       120043 |       60002   |       60004   |        120043 |     0.47106  |                77.0279 |           0.389403 |             10.1 |     5929.7 |     4186.4 |     3006.6 |      32.4 |       9.9 |       0   |
| [qgis310 > somap310_fix_print > getprint.txt](../results/details/compare-getprint/20201111-053952/qgis310/somap310_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |            195.6 | +1221.6%                 |              68   | +8.6%                     |         1444.8 | +1688.4%               |           19550 | +5583.1%                |            63 |           19 |    30.1587 |      22933.7  |            1 |       120074 |       60005   |       60006.8 |        120074 |     0.330759 |                50.1273 |           0.273423 |              9.3 |     5892.1 |     3559.1 |     2949.2 |      27.8 |      11.2 |       0   |

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