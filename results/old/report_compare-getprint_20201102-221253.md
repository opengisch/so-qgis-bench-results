# QGIS Benchmark summary compare-getprint (20201102-221253)


compare different version of QGIS servers using the same settings

_run completed in 00h 08m 09s_

_Sample size per configuration 112_
## Summary plot
An interactive summary plot can be found [here](report_compare-getprint_20201102-221253_plot.html)

## Summary
| name    | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 | Global  |                 39.1 | +0.0%                        |          323.4 | +0.0%                  |           550   | +0.0%                   |          156 |        32265 |             22.4 |           112 |            0 |     6360   |     5875   |     3106.9 |      86.2 |      70.5 |      14.2 |          0 |
| qgis310 | Global  |                 74.7 | +91.0%                       |          673.8 | +108.4%                |          3853.5 | +600.6%                 |         1782 |        40465 |             20.5 |           112 |            0 |     6077.4 |     5741.6 |     3069.9 |      90.1 |      72.8 |      14.2 |          0 |
| qgis218 | Global  |                 92.7 | +137.1%                      |          803.8 | +148.6%                |          6252   | +1036.7%                |          729 |        19174 |            224.1 |           112 |            0 |    10925.7 |     8654.6 |     2430.6 |      99.8 |      25.9 |       3   |          0 |

## Aggregated
| name                         | group           |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------|-----------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 > somap316_fix_print | somap_fix_print |                 39.1 | +0.0%                        |          323.4 | +0.0%                  |           550   | +0.0%                   |          156 |        32265 |             22.4 |           112 |            0 |     6360   |     5875   |     3106.9 |      86.2 |      70.5 |      14.2 |          0 |
| qgis310 > somap310_fix_print | somap_fix_print |                 74.7 | +91.0%                       |          673.8 | +108.4%                |          3853.5 | +600.6%                 |         1782 |        40465 |             20.5 |           112 |            0 |     6077.4 |     5741.6 |     3069.9 |      90.1 |      72.8 |      14.2 |          0 |
| qgis218 > somap218_fix_print | somap_fix_print |                 92.7 | +137.1%                      |          803.8 | +148.6%                |          6252   | +1036.7%                |          729 |        19174 |            224.1 |           112 |            0 |    10925.7 |     8654.6 |     2430.6 |      99.8 |      25.9 |       3   |          0 |

## Detail
| name                                                                                                                                                            | group                          |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316 > somap316_fix_print > getprint.txt](../results/details/compare-getprint/20201102-221253/qgis316/somap316_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                 39.1 | +0.0%                        |          323.4 | +0.0%                  |           550   | +0.0%                   |           112 |            0 |          0 |       2887.1  |          156 |        32265 |        1483.9 |       31865   |       32258.1 |      3.32029 |                680.417 |           2.57244  |             22.4 |     6360   |     5875   |     3106.9 |      86.2 |      70.5 |      14.2 |
| [qgis310 > somap310_fix_print > getprint.txt](../results/details/compare-getprint/20201102-221253/qgis310/somap310_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                 74.7 | +91.0%                       |          673.8 | +108.4%                |          3853.5 | +600.6%                 |           112 |            0 |          0 |       6015.72 |         1782 |        40465 |        4589.7 |       38898   |       40460.1 |      1.61416 |                302.345 |           1.25059  |             20.5 |     6077.4 |     5741.6 |     3069.9 |      90.1 |      72.8 |      14.2 |
| [qgis218 > somap218_fix_print > getprint.txt](../results/details/compare-getprint/20201102-221253/qgis218/somap218_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                 92.7 | +137.1%                      |          803.8 | +148.6%                |          6252   | +1036.7%                |           112 |            0 |          0 |       7176.98 |          729 |        19174 |       13454.8 |       15849.5 |       18992.5 |      1.28557 |               2634.04  |           0.996011 |            224.1 |    10925.7 |     8654.6 |     2430.6 |      99.8 |      25.9 |       3   |

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
      QGIS_REPLICAS: '6'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
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
      QGIS_VERSION: '3.10'
    projects:
      somap310_fix_print:
        - getprint.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_IGNORE_BAD_LAYERS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_IGNORE_BAD_LAYERS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_IGNORE_BAD_LAYERS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_fix_print:
      - getprint.txt
    template: docker-compose-qgis-3-nginx

```