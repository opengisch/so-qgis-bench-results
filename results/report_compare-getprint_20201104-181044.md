# QGIS Benchmark summary compare-getprint (20201104-181044)


compare different version of QGIS servers using the same settings

_run completed in 00h 27m 28s_

_Sample size per configuration 63_
## Summary plot
An interactive summary plot can be found [here](report_compare-getprint_20201104-181044_plot.html)

## Summary
| name    | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 | Global  |                 16   | +0.0%                        |           80.4 | +0.0%                  |             497 | +0.0%                   |          141 |         6191 |             22.6 |            63 |            0 |     7126.8 |     5375.4 |     2177.3 |      99.5 |      80   |       5.7 |        0   |
| qgis316 | Global  |                128.5 | +703.1%                      |          165.5 | +105.8%                |             651 | +31.0%                  |          188 |       120098 |             20.5 |            63 |            1 |     9159.5 |     7496.8 |     6029.2 |      76.1 |      12.3 |       0   |        1.6 |
| qgis310 | Global  |                138.2 | +763.7%                      |          381.2 | +373.8%                |            3872 | +679.1%                 |         1676 |       120112 |             18.2 |            63 |            2 |     8820.6 |     6945.7 |     5715.2 |      76.7 |      20.5 |       0   |        3.2 |

## Aggregated
| name                         | group           |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------|-----------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_fix_print | somap_fix_print |                 16   | +0.0%                        |           80.4 | +0.0%                  |             497 | +0.0%                   |          141 |         6191 |             22.6 |            63 |            0 |     7126.8 |     5375.4 |     2177.3 |      99.5 |      80   |       5.7 |        0   |
| qgis316 > somap316_fix_print | somap_fix_print |                128.5 | +703.1%                      |          165.5 | +105.8%                |             651 | +31.0%                  |          188 |       120098 |             20.5 |            63 |            1 |     9159.5 |     7496.8 |     6029.2 |      76.1 |      12.3 |       0   |        1.6 |
| qgis310 > somap310_fix_print | somap_fix_print |                138.2 | +763.7%                      |          381.2 | +373.8%                |            3872 | +679.1%                 |         1676 |       120112 |             18.2 |            63 |            2 |     8820.6 |     6945.7 |     5715.2 |      76.7 |      20.5 |       0   |        3.2 |

## Detail
| name                                                                                                                                                            | group                          |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_fix_print > getprint.txt](../results/details/compare-getprint/20201104-181044/qgis218/somap218_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                 16   | +0.0%                        |           80.4 | +0.0%                  |             497 | +0.0%                   |            63 |            0 |     0      |       1276.89 |          141 |         6191 |        5050.2 |        5754.4 |          6191 |     7.00233  |               2566.6   |           5.7885   |             22.6 |     7126.8 |     5375.4 |     2177.3 |      99.5 |      80   |       5.7 |
| [qgis316 > somap316_fix_print > getprint.txt](../results/details/compare-getprint/20201104-181044/qgis316/somap316_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                128.5 | +703.1%                      |          165.5 | +105.8%                |             651 | +31.0%                  |            63 |            1 |     1.5873 |       2627.65 |          188 |       120098 |        1407   |        1485.2 |        120098 |     0.51192  |                170.381 |           0.42318  |             20.5 |     9159.5 |     7496.8 |     6029.2 |      76.1 |      12.3 |       0   |
| [qgis310 > somap310_fix_print > getprint.txt](../results/details/compare-getprint/20201104-181044/qgis310/somap310_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                138.2 | +763.7%                      |          381.2 | +373.8%                |            3872 | +679.1%                 |            63 |            2 |     3.1746 |       6050.29 |         1676 |       120112 |        4767.6 |        5293   |        120112 |     0.474562 |                140.144 |           0.392298 |             18.2 |     8820.6 |     6945.7 |     5715.2 |      76.7 |      20.5 |       0   |

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