# QGIS Benchmark summary compare-major-fileversion (20201103-072845)


compare different version of QGIS servers using the same settings

_run completed in 00h 02m 23s_

_Sample size per configuration 30_
## Summary plot
An interactive summary plot can be found [here](report_compare-major-fileversion_20201103-072845_plot.html)

## Summary
| name            | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-----------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316         | Global  |                  6.8 | +0.0%                        |            6.9 | +0.0%                  |           219   | +0.0%                   |          154 |          340 |              0.8 |            30 |            0 |     2296.1 |     2285.9 |     2275.7 |      24.1 |      15.6 |       7.1 |          0 |
| qgis316-218file | Global  |                  6.8 | +0.0%                        |            7.2 | +5.5%                  |           233   | +6.4%                   |          146 |          347 |              0.8 |            30 |            0 |     2278.2 |     2270.4 |     2262.5 |      19.9 |      13.8 |       7.7 |          0 |
| qgis316-310file | Global  |                  6.9 | +1.5%                        |            7   | +2.0%                  |           228   | +4.1%                   |          145 |          335 |              0.8 |            30 |            0 |     2295.7 |     2279.6 |     2263.4 |      27.6 |      17.8 |       8.1 |          0 |
| qgis310-218file | Global  |                  8.2 | +20.6%                       |           15.5 | +125.1%                |           545.5 | +149.1%                 |          252 |          699 |              0.8 |            30 |            0 |     2294.1 |     2283.6 |     2273.1 |      23.1 |      15.8 |       8.5 |          0 |
| qgis310         | Global  |                  8.5 | +25.0%                       |           15.1 | +120.0%                |           552   | +152.1%                 |          231 |          683 |              0.8 |            30 |            0 |     2287.1 |     2262.7 |     2216.5 |      30.5 |      15.5 |       0.5 |          0 |

## Aggregated
| name                          | group    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------|----------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 > somap316_lk         | somap_lk |                  6.8 | +0.0%                        |            6.9 | +0.0%                  |           219   | +0.0%                   |          154 |          340 |              0.8 |            30 |            0 |     2296.1 |     2285.9 |     2275.7 |      24.1 |      15.6 |       7.1 |          0 |
| qgis316-218file > somap218_lk | somap_lk |                  6.8 | +0.0%                        |            7.2 | +5.5%                  |           233   | +6.4%                   |          146 |          347 |              0.8 |            30 |            0 |     2278.2 |     2270.4 |     2262.5 |      19.9 |      13.8 |       7.7 |          0 |
| qgis316-310file > somap310_lk | somap_lk |                  6.9 | +1.5%                        |            7   | +2.0%                  |           228   | +4.1%                   |          145 |          335 |              0.8 |            30 |            0 |     2295.7 |     2279.6 |     2263.4 |      27.6 |      17.8 |       8.1 |          0 |
| qgis310-218file > somap218_lk | somap_lk |                  8.2 | +20.6%                       |           15.5 | +125.1%                |           545.5 | +149.1%                 |          252 |          699 |              0.8 |            30 |            0 |     2294.1 |     2283.6 |     2273.1 |      23.1 |      15.8 |       8.5 |          0 |
| qgis310 > somap310_lk         | somap_lk |                  8.5 | +25.0%                       |           15.1 | +120.0%                |           552   | +152.1%                 |          231 |          683 |              0.8 |            30 |            0 |     2287.1 |     2262.7 |     2216.5 |      30.5 |      15.5 |       0.5 |          0 |

## Detail
| name                                                                                                                                                           | group             |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316 > somap316_lk > lk.txt](../results/details/compare-major-fileversion/20201103-072845/qgis316/somap316_lk/lk.txt/dashboard/index.html)                 | somap_lk > lk.txt |                  6.8 | +0.0%                        |            6.9 | +0.0%                  |           219   | +0.0%                   |            30 |            0 |          0 |       228.8   |          154 |          340 |         319   |        335.6  |           340 |      25.7954 |                699.086 |           10.523   |              0.8 |     2296.1 |     2285.9 |     2275.7 |      24.1 |      15.6 |       7.1 |
| [qgis316-218file > somap218_lk > lk.txt](../results/details/compare-major-fileversion/20201103-072845/qgis316-218file/somap218_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |                  6.8 | +0.0%                        |            7.2 | +5.5%                  |           233   | +6.4%                   |            30 |            0 |          0 |       241.433 |          146 |          347 |         319.6 |        340.95 |           347 |      25.2101 |                683.224 |           10.2843  |              0.8 |     2278.2 |     2270.4 |     2262.5 |      19.9 |      13.8 |       7.7 |
| [qgis316-310file > somap310_lk > lk.txt](../results/details/compare-major-fileversion/20201103-072845/qgis316-310file/somap310_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |                  6.9 | +1.5%                        |            7   | +2.0%                  |           228   | +4.1%                   |            30 |            0 |          0 |       233.4   |          145 |          335 |         309.3 |        328.4  |           335 |      25.7511 |                697.886 |           10.505   |              0.8 |     2295.7 |     2279.6 |     2263.4 |      27.6 |      17.8 |       8.1 |
| [qgis310-218file > somap218_lk > lk.txt](../results/details/compare-major-fileversion/20201103-072845/qgis310-218file/somap218_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |                  8.2 | +20.6%                       |           15.5 | +125.1%                |           545.5 | +149.1%                 |            30 |            0 |          0 |       515.067 |          252 |          699 |         689.4 |        696.25 |           699 |      13.8249 |                374.698 |            5.63976 |              0.8 |     2294.1 |     2283.6 |     2273.1 |      23.1 |      15.8 |       8.5 |
| [qgis310 > somap310_lk > lk.txt](../results/details/compare-major-fileversion/20201103-072845/qgis310/somap310_lk/lk.txt/dashboard/index.html)                 | somap_lk > lk.txt |                  8.5 | +25.0%                       |           15.1 | +120.0%                |           552   | +152.1%                 |            30 |            0 |          0 |       503.433 |          231 |          683 |         664.7 |        679.7  |           683 |      14.0581 |                381.02  |            5.7349  |              0.8 |     2287.1 |     2262.7 |     2216.5 |      30.5 |      15.5 |       0.5 |

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
  qgis310:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '1'
      QGIS_FCGI_PROCESSES: '1'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_lk:
        - lk.txt
  qgis310-218file:
    inherit: qgis310
    projects:
      somap218_lk:
        - lk.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - lk.txt
  qgis316-218file:
    inherit: qgis316
    projects:
      somap218_lk:
        - lk.txt
  qgis316-310file:
    inherit: qgis316
    projects:
      somap310_lk:
        - lk.txt

```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis310-218file:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_VERSION: '3.10'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap218_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316-218file:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_VERSION: '3.16'
    inherit: qgis316
    path-prefix: ogc
    projects:
      somap218_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316-310file:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_VERSION: '3.16'
    inherit: qgis316
    path-prefix: ogc
    projects:
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```