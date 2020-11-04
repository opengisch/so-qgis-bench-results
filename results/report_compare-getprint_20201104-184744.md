# QGIS Benchmark summary compare-getprint (20201104-184744)


compare different version of QGIS servers using the same settings

_run completed in 00h 27m 21s_

_Sample size per configuration 63_
## Summary plot
An interactive summary plot can be found [here](report_compare-getprint_20201104-184744_plot.html)

## Summary
| name    | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 | Global  |                 15   | +0.0%                        |           80.6 | +0.0%                  |             491 | +0.0%                   |          139 |         7024 |             22.6 |            63 |            0 |     7137.1 |     5542.4 |     2324.9 |      99.6 |      84.7 |       6.9 |        0   |
| qgis316 | Global  |                128.5 | +756.7%                      |          225.4 | +179.6%                |             599 | +22.0%                  |          221 |       120088 |             20.2 |            63 |            2 |     9204.5 |     7550.9 |     6238.6 |      77.2 |      11.9 |       0   |        3.2 |
| qgis310 | Global  |                138.7 | +824.7%                      |          378.2 | +369.2%                |            3701 | +653.8%                 |         1686 |       120085 |             18.2 |            63 |            2 |     8839.1 |     7039.8 |     5861.4 |      77.1 |      20.2 |       0.2 |        3.2 |

## Aggregated
| name                         | group           |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------|-----------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_fix_print | somap_fix_print |                 15   | +0.0%                        |           80.6 | +0.0%                  |             491 | +0.0%                   |          139 |         7024 |             22.6 |            63 |            0 |     7137.1 |     5542.4 |     2324.9 |      99.6 |      84.7 |       6.9 |        0   |
| qgis316 > somap316_fix_print | somap_fix_print |                128.5 | +756.7%                      |          225.4 | +179.6%                |             599 | +22.0%                  |          221 |       120088 |             20.2 |            63 |            2 |     9204.5 |     7550.9 |     6238.6 |      77.2 |      11.9 |       0   |        3.2 |
| qgis310 > somap310_fix_print | somap_fix_print |                138.7 | +824.7%                      |          378.2 | +369.2%                |            3701 | +653.8%                 |         1686 |       120085 |             18.2 |            63 |            2 |     8839.1 |     7039.8 |     5861.4 |      77.1 |      20.2 |       0.2 |        3.2 |

## Detail
| name                                                                                                                                                            | group                          |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_fix_print > getprint.txt](../results/details/compare-getprint/20201104-184744/qgis218/somap218_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                 15   | +0.0%                        |           80.6 | +0.0%                  |             491 | +0.0%                   |            63 |            0 |     0      |       1279.29 |          139 |         7024 |        4991.6 |        5661.4 |          7024 |     7.0289   |               2576.3   |           5.81045  |             22.6 |     7137.1 |     5542.4 |     2324.9 |      99.6 |      84.7 |       6.9 |
| [qgis316 > somap316_fix_print > getprint.txt](../results/details/compare-getprint/20201104-184744/qgis316/somap316_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                128.5 | +756.7%                      |          225.4 | +179.6%                |             599 | +22.0%                  |            63 |            2 |     3.1746 |       3577.11 |          221 |       120088 |        1607.2 |        1969.4 |        120088 |     0.511833 |                167.797 |           0.423108 |             20.2 |     9204.5 |     7550.9 |     6238.6 |      77.2 |      11.9 |       0   |
| [qgis310 > somap310_fix_print > getprint.txt](../results/details/compare-getprint/20201104-184744/qgis310/somap310_fix_print/getprint.txt/dashboard/index.html) | somap_fix_print > getprint.txt |                138.7 | +824.7%                      |          378.2 | +369.2%                |            3701 | +653.8%                 |            63 |            2 |     3.1746 |       6002.52 |         1686 |       120085 |        4427.4 |        4612.6 |        120085 |     0.473325 |                139.783 |           0.391275 |             18.2 |     8839.1 |     7039.8 |     5861.4 |      77.1 |      20.2 |       0.2 |

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