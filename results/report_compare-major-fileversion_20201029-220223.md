# QGIS Benchmark summary compare-major-fileversion (20201029-220223)


compare different version of QGIS servers using the same settings

_run completed in 00h 02m 17s_

_Sample size per configuration 30_
## Summary plot
An interactive summary plot can be found [here](report_compare-major-fileversion_20201029-220223_plot.html)

## Summary
| name            | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-----------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-218file | Global  |                  6.7 | +0.0%                        |            6.5 | +0.0%                  |           216   | +0.0%                   |          124 |          310 |            30 |            0 |     3763.7 |     3745.9 |     3728.2 |      32.9 |      32.5 |      32   |          0 |
| qgis316-310file | Global  |                  6.7 | +0.0%                        |            6.8 | +4.9%                  |           228   | +5.6%                   |          139 |          320 |            30 |            0 |     3763.5 |     3763.5 |     3763.5 |      35.1 |      35.1 |      35.1 |          0 |
| qgis316         | Global  |                  6.9 | +3.0%                        |            7.4 | +14.4%                 |           242   | +12.0%                  |          143 |          345 |            30 |            0 |     3761.5 |     3761.5 |     3761.5 |      35   |      35   |      35   |          0 |
| qgis310-218file | Global  |                  7.4 | +10.4%                       |           14   | +116.7%                |           527.5 | +144.2%                 |          224 |          622 |            30 |            0 |     3759.3 |     3748   |     3736.7 |      39   |      31.8 |      24.6 |          0 |
| qgis310         | Global  |                  7.8 | +16.4%                       |           14.7 | +128.1%                |           533   | +146.8%                 |          235 |          688 |            30 |            0 |     3753.8 |     3753.8 |     3753.8 |      37.3 |      37.3 |      37.3 |          0 |

## Aggregated
| name                          | group    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------|----------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-218file > somap218_lk | somap_lk |                  6.7 | +0.0%                        |            6.5 | +0.0%                  |           216   | +0.0%                   |          124 |          310 |            30 |            0 |     3763.7 |     3745.9 |     3728.2 |      32.9 |      32.5 |      32   |          0 |
| qgis316-310file > somap310_lk | somap_lk |                  6.7 | +0.0%                        |            6.8 | +4.9%                  |           228   | +5.6%                   |          139 |          320 |            30 |            0 |     3763.5 |     3763.5 |     3763.5 |      35.1 |      35.1 |      35.1 |          0 |
| qgis316 > somap316_lk         | somap_lk |                  6.9 | +3.0%                        |            7.4 | +14.4%                 |           242   | +12.0%                  |          143 |          345 |            30 |            0 |     3761.5 |     3761.5 |     3761.5 |      35   |      35   |      35   |          0 |
| qgis310-218file > somap218_lk | somap_lk |                  7.4 | +10.4%                       |           14   | +116.7%                |           527.5 | +144.2%                 |          224 |          622 |            30 |            0 |     3759.3 |     3748   |     3736.7 |      39   |      31.8 |      24.6 |          0 |
| qgis310 > somap310_lk         | somap_lk |                  7.8 | +16.4%                       |           14.7 | +128.1%                |           533   | +146.8%                 |          235 |          688 |            30 |            0 |     3753.8 |     3753.8 |     3753.8 |      37.3 |      37.3 |      37.3 |          0 |

## Detail
| name                                                                                                                                                           | group             |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316-218file > somap218_lk > lk.txt](../results/details/compare-major-fileversion/20201029-220223/qgis316-218file/somap218_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |                  6.7 | +0.0%                        |            6.5 | +0.0%                  |           216   | +0.0%                   |            30 |            0 |          0 |       215.067 |          124 |          310 |         286.2 |        304.5  |           310 |      27.0514 |                733.126 |           11.0354  |     3763.7 |     3745.9 |     3728.2 |      32.9 |      32.5 |      32   |
| [qgis316-310file > somap310_lk > lk.txt](../results/details/compare-major-fileversion/20201029-220223/qgis316-310file/somap310_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |                  6.7 | +0.0%                        |            6.8 | +4.9%                  |           228   | +5.6%                   |            30 |            0 |          0 |       225.633 |          139 |          320 |         295.6 |        312.85 |           320 |      26.2238 |                710.697 |           10.6978  |     3763.5 |     3763.5 |     3763.5 |      35.1 |      35.1 |      35.1 |
| [qgis316 > somap316_lk > lk.txt](../results/details/compare-major-fileversion/20201029-220223/qgis316/somap316_lk/lk.txt/dashboard/index.html)                 | somap_lk > lk.txt |                  6.9 | +3.0%                        |            7.4 | +14.4%                 |           242   | +12.0%                  |            30 |            0 |          0 |       246.133 |          143 |          345 |         312.6 |        336.75 |           345 |      24.7934 |                671.931 |           10.1143  |     3761.5 |     3761.5 |     3761.5 |      35   |      35   |      35   |
| [qgis310-218file > somap218_lk > lk.txt](../results/details/compare-major-fileversion/20201029-220223/qgis310-218file/somap218_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |                  7.4 | +10.4%                       |           14   | +116.7%                |           527.5 | +144.2%                 |            30 |            0 |          0 |       466.1   |          224 |          622 |         594.3 |        614.85 |           622 |      14.985  |                406.142 |            6.11303 |     3759.3 |     3748   |     3736.7 |      39   |      31.8 |      24.6 |
| [qgis310 > somap310_lk > lk.txt](../results/details/compare-major-fileversion/20201029-220223/qgis310/somap310_lk/lk.txt/dashboard/index.html)                 | somap_lk > lk.txt |                  7.8 | +16.4%                       |           14.7 | +128.1%                |           533   | +146.8%                 |            30 |            0 |          0 |       490.467 |          235 |          688 |         655.2 |        681.4  |           688 |      14.2993 |                387.558 |            5.83331 |     3753.8 |     3753.8 |     3753.8 |      37.3 |      37.3 |      37.3 |

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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_VERSION: '3.16'
    inherit: qgis316
    path-prefix: ogc
    projects:
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```