# QGIS Benchmark summary compare-major-fileversion (20201103-041840)


compare different version of QGIS servers using the same settings

_run completed in 00h 02m 19s_

_Sample size per configuration 30_
## Summary plot
An interactive summary plot can be found [here](report_compare-major-fileversion_20201103-041840_plot.html)

## Summary
| name            | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-----------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-310file | Global  |                  6.8 | +0.0%                        |            7.2 | +10.9%                 |           230   | +9.3%                   |          143 |          386 |              0.8 |            30 |            0 |     2243.1 |     2227.3 |     2211.6 |      26.8 |      17.6 |       8.3 |          0 |
| qgis316         | Global  |                  6.9 | +1.5%                        |            6.5 | +0.0%                  |           215   | +2.1%                   |          122 |          315 |              0.8 |            30 |            0 |     2225.8 |     2225.8 |     2225.8 |       8.7 |       8.7 |       8.7 |          0 |
| qgis316-218file | Global  |                  6.9 | +1.5%                        |            6.5 | +0.0%                  |           210.5 | +0.0%                   |          132 |          323 |              0.8 |            30 |            0 |     2226.4 |     2226.4 |     2226.4 |       7.9 |       7.9 |       7.9 |          0 |
| qgis310-218file | Global  |                  7.9 | +16.2%                       |           14.9 | +127.7%                |           540.5 | +156.8%                 |          208 |          679 |              0.8 |            30 |            0 |     2238.7 |     2231.4 |     2224   |      21.6 |      15   |       8.4 |          0 |
| qgis310         | Global  |                  8.1 | +19.1%                       |           15.6 | +139.4%                |           549   | +160.8%                 |          239 |          702 |              0.8 |            30 |            0 |     2229.6 |     2225.8 |     2222   |      20.1 |      10.2 |       0.3 |          0 |

## Aggregated
| name                          | group    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------|----------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-310file > somap310_lk | somap_lk |                  6.8 | +0.0%                        |            7.2 | +10.9%                 |           230   | +9.3%                   |          143 |          386 |              0.8 |            30 |            0 |     2243.1 |     2227.3 |     2211.6 |      26.8 |      17.6 |       8.3 |          0 |
| qgis316 > somap316_lk         | somap_lk |                  6.9 | +1.5%                        |            6.5 | +0.0%                  |           215   | +2.1%                   |          122 |          315 |              0.8 |            30 |            0 |     2225.8 |     2225.8 |     2225.8 |       8.7 |       8.7 |       8.7 |          0 |
| qgis316-218file > somap218_lk | somap_lk |                  6.9 | +1.5%                        |            6.5 | +0.0%                  |           210.5 | +0.0%                   |          132 |          323 |              0.8 |            30 |            0 |     2226.4 |     2226.4 |     2226.4 |       7.9 |       7.9 |       7.9 |          0 |
| qgis310-218file > somap218_lk | somap_lk |                  7.9 | +16.2%                       |           14.9 | +127.7%                |           540.5 | +156.8%                 |          208 |          679 |              0.8 |            30 |            0 |     2238.7 |     2231.4 |     2224   |      21.6 |      15   |       8.4 |          0 |
| qgis310 > somap310_lk         | somap_lk |                  8.1 | +19.1%                       |           15.6 | +139.4%                |           549   | +160.8%                 |          239 |          702 |              0.8 |            30 |            0 |     2229.6 |     2225.8 |     2222   |      20.1 |      10.2 |       0.3 |          0 |

## Detail
| name                                                                                                                                                           | group             |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316-310file > somap310_lk > lk.txt](../results/details/compare-major-fileversion/20201103-041840/qgis316-310file/somap310_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |                  6.8 | +0.0%                        |            7.2 | +10.9%                 |           230   | +9.3%                   |            30 |            0 |          0 |       241.533 |          143 |          386 |         347.8 |        378.3  |           386 |      24.7117 |                669.718 |           10.081   |              0.8 |     2243.1 |     2227.3 |     2211.6 |      26.8 |      17.6 |       8.3 |
| [qgis316 > somap316_lk > lk.txt](../results/details/compare-major-fileversion/20201103-041840/qgis316/somap316_lk/lk.txt/dashboard/index.html)                 | somap_lk > lk.txt |                  6.9 | +1.5%                        |            6.5 | +0.0%                  |           215   | +2.1%                   |            30 |            0 |          0 |       217.8   |          122 |          315 |         288.6 |        307.85 |           315 |      26.8817 |                728.528 |           10.9662  |              0.8 |     2225.8 |     2225.8 |     2225.8 |       8.7 |       8.7 |       8.7 |
| [qgis316-218file > somap218_lk > lk.txt](../results/details/compare-major-fileversion/20201103-041840/qgis316-218file/somap218_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |                  6.9 | +1.5%                        |            6.5 | +0.0%                  |           210.5 | +0.0%                   |            30 |            0 |          0 |       217.767 |          132 |          323 |         292.1 |        315.85 |           323 |      26.8097 |                726.575 |           10.9368  |              0.8 |     2226.4 |     2226.4 |     2226.4 |       7.9 |       7.9 |       7.9 |
| [qgis310-218file > somap218_lk > lk.txt](../results/details/compare-major-fileversion/20201103-041840/qgis310-218file/somap218_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |                  7.9 | +16.2%                       |           14.9 | +127.7%                |           540.5 | +156.8%                 |            30 |            0 |          0 |       495.9   |          208 |          679 |         660.4 |        674.6  |           679 |      14.2045 |                384.988 |            5.79464 |              0.8 |     2238.7 |     2231.4 |     2224   |      21.6 |      15   |       8.4 |
| [qgis310 > somap310_lk > lk.txt](../results/details/compare-major-fileversion/20201103-041840/qgis310/somap310_lk/lk.txt/dashboard/index.html)                 | somap_lk > lk.txt |                  8.1 | +19.1%                       |           15.6 | +139.4%                |           549   | +160.8%                 |            30 |            0 |          0 |       521.367 |          239 |          702 |         696.4 |        699.25 |           702 |      13.6799 |                370.769 |            5.58061 |              0.8 |     2229.6 |     2225.8 |     2222   |      20.1 |      10.2 |       0.3 |

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