# QGIS Benchmark summary compare-getprint (20201103-115341)


compare different version of QGIS servers using the same settings

_run completed in 00h 25m 27s_

_Sample size per configuration 112_
## Summary plot
An interactive summary plot can be found [here](report_compare-getprint_20201103-115341_plot.html)

## Summary
| name    | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 | Global  |                 13.8 | +0.0%                        |           65.4 | +0.0%                  |           522   | +0.0%                   |          183 |         1610 |             22.4 |           112 |            0 |     6394.6 |     6279.6 |     6205   |      79.5 |      67.7 |      14.7 |          0 |
| qgis310 | Global  |                 45.7 | +231.2%                      |          377   | +476.7%                |          3789.5 | +626.0%                 |         1757 |         5332 |             20.5 |           112 |            0 |     6054.4 |     5925.9 |     5850.7 |      91   |      71.2 |      14.5 |          0 |
| qgis218 | Global  |                 99.3 | +619.6%                      |          862.3 | +1218.8%               |          6652   | +1174.3%                |          738 |        18844 |            224.2 |           112 |            0 |    11950.8 |     9111.4 |     2643.8 |      99.9 |      25.2 |       0.1 |          0 |

## Aggregated
| name                         | group           |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------|-----------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 > somap316_fix_print | somap_fix_print |                 13.8 | +0.0%                        |           65.4 | +0.0%                  |           522   | +0.0%                   |          183 |         1610 |             22.4 |           112 |            0 |     6394.6 |     6279.6 |     6205   |      79.5 |      67.7 |      14.7 |          0 |
| qgis310 > somap310_fix_print | somap_fix_print |                 45.7 | +231.2%                      |          377   | +476.7%                |          3789.5 | +626.0%                 |         1757 |         5332 |             20.5 |           112 |            0 |     6054.4 |     5925.9 |     5850.7 |      91   |      71.2 |      14.5 |          0 |
| qgis218 > somap218_fix_print | somap_fix_print |                 99.3 | +619.6%                      |          862.3 | +1218.8%               |          6652   | +1174.3%                |          738 |        18844 |            224.2 |           112 |            0 |    11950.8 |     9111.4 |     2643.8 |      99.9 |      25.2 |       0.1 |          0 |

## Detail
| name                                                                                                                                                            | group                          |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316 > somap316_fix_print > getprint.txt](../results/details/compare-getprint/20201103-115341/qgis316/somap316_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                 13.8 | +0.0%                        |           65.4 | +0.0%                  |           522   | +0.0%                   |           112 |            0 |          0 |       583.786 |          183 |         1610 |        1056.9 |       1182.65 |       1609.74 |     14.5417  |               2983.44  |          11.2664   |             22.4 |     6394.6 |     6279.6 |     6205   |      79.5 |      67.7 |      14.7 |
| [qgis310 > somap310_fix_print > getprint.txt](../results/details/compare-getprint/20201103-115341/qgis310/somap310_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                 45.7 | +231.2%                      |          377   | +476.7%                |          3789.5 | +626.0%                 |           112 |            0 |          0 |      3366.42  |         1757 |         5332 |        4440.5 |       4729.3  |       5295.73 |      2.77578 |                520.508 |           2.15057  |             20.5 |     6054.4 |     5925.9 |     5850.7 |      91   |      71.2 |      14.5 |
| [qgis218 > somap218_fix_print > getprint.txt](../results/details/compare-getprint/20201103-115341/qgis218/somap218_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                 99.3 | +619.6%                      |          862.3 | +1218.8%               |          6652   | +1174.3%                |           112 |            0 |          0 |      7698.71  |          738 |        18844 |       13059.2 |      16416.6  |      18815    |      1.19525 |               2449.72  |           0.926038 |            224.2 |    11950.8 |     9111.4 |     2643.8 |      99.9 |      25.2 |       0.1 |

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
      QGIS_REPLICAS: '6'
      QGIS_SERVER_IGNORE_BAD_LAYERS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
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
      QGIS_REPLICAS: '6'
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
      QGIS_REPLICAS: '6'
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