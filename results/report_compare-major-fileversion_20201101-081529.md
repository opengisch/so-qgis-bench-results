# QGIS Benchmark summary compare-major-fileversion (20201101-081529)


compare different version of QGIS servers using the same settings

_run completed in 00h 02m 21s_

_Sample size per configuration 30_
## Summary plot
An interactive summary plot can be found [here](report_compare-major-fileversion_20201101-081529_plot.html)

## Summary
| name            | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-----------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-310file | Global  |                  6.7 | +0.0%                        |            6.7 | +0.0%                  |           214.5 | +0.0%                   |          130 |          330 |            30 |            0 |     4643.1 |     4629.9 |     4616.7 |      37.3 |      31.2 |      25   |          0 |
| qgis316         | Global  |                  6.8 | +1.5%                        |            7.1 | +6.4%                  |           237   | +10.5%                  |          129 |          344 |            30 |            0 |     4634.4 |     4634.4 |     4634.4 |      35.7 |      35.7 |      35.7 |          0 |
| qgis316-218file | Global  |                  6.9 | +3.0%                        |            7.1 | +6.3%                  |           233.5 | +8.9%                   |          157 |          332 |            30 |            0 |     4645.2 |     4611.4 |     4577.7 |      35.8 |      33.5 |      31.2 |          0 |
| qgis310         | Global  |                  7.9 | +17.9%                       |           14.9 | +123.3%                |           530   | +147.1%                 |          228 |          698 |            30 |            0 |     4631   |     4619.9 |     4598.3 |      33.8 |      25.7 |      14   |          0 |
| qgis310-218file | Global  |                  7.9 | +17.9%                       |           15.3 | +129.4%                |           580   | +170.4%                 |          227 |          672 |            30 |            0 |     4637.6 |     4637.2 |     4636.8 |      35.3 |      26.8 |      18.3 |          0 |

## Aggregated
| name                          | group    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------|----------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-310file > somap310_lk | somap_lk |                  6.7 | +0.0%                        |            6.7 | +0.0%                  |           214.5 | +0.0%                   |          130 |          330 |            30 |            0 |     4643.1 |     4629.9 |     4616.7 |      37.3 |      31.2 |      25   |          0 |
| qgis316 > somap316_lk         | somap_lk |                  6.8 | +1.5%                        |            7.1 | +6.4%                  |           237   | +10.5%                  |          129 |          344 |            30 |            0 |     4634.4 |     4634.4 |     4634.4 |      35.7 |      35.7 |      35.7 |          0 |
| qgis316-218file > somap218_lk | somap_lk |                  6.9 | +3.0%                        |            7.1 | +6.3%                  |           233.5 | +8.9%                   |          157 |          332 |            30 |            0 |     4645.2 |     4611.4 |     4577.7 |      35.8 |      33.5 |      31.2 |          0 |
| qgis310 > somap310_lk         | somap_lk |                  7.9 | +17.9%                       |           14.9 | +123.3%                |           530   | +147.1%                 |          228 |          698 |            30 |            0 |     4631   |     4619.9 |     4598.3 |      33.8 |      25.7 |      14   |          0 |
| qgis310-218file > somap218_lk | somap_lk |                  7.9 | +17.9%                       |           15.3 | +129.4%                |           580   | +170.4%                 |          227 |          672 |            30 |            0 |     4637.6 |     4637.2 |     4636.8 |      35.3 |      26.8 |      18.3 |          0 |

## Detail
| name                                                                                                                                                           | group             |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316-310file > somap310_lk > lk.txt](../results/details/compare-major-fileversion/20201101-081529/qgis316-310file/somap310_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |                  6.7 | +0.0%                        |            6.7 | +0.0%                  |           214.5 | +0.0%                   |            30 |            0 |          0 |       221.667 |          130 |          330 |         302.9 |        322.3  |           330 |      26.7142 |                723.987 |           10.8978  |     4643.1 |     4629.9 |     4616.7 |      37.3 |      31.2 |      25   |
| [qgis316 > somap316_lk > lk.txt](../results/details/compare-major-fileversion/20201101-081529/qgis316/somap316_lk/lk.txt/dashboard/index.html)                 | somap_lk > lk.txt |                  6.8 | +1.5%                        |            7.1 | +6.4%                  |           237   | +10.5%                  |            30 |            0 |          0 |       235.8   |          129 |          344 |         319.9 |        338.5  |           344 |      25.5754 |                693.126 |           10.4333  |     4634.4 |     4634.4 |     4634.4 |      35.7 |      35.7 |      35.7 |
| [qgis316-218file > somap218_lk > lk.txt](../results/details/compare-major-fileversion/20201101-081529/qgis316-218file/somap218_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |                  6.9 | +3.0%                        |            7.1 | +6.3%                  |           233.5 | +8.9%                   |            30 |            0 |          0 |       235.567 |          157 |          332 |         311.3 |        326.5  |           332 |      25.5973 |                693.718 |           10.4422  |     4645.2 |     4611.4 |     4577.7 |      35.8 |      33.5 |      31.2 |
| [qgis310 > somap310_lk > lk.txt](../results/details/compare-major-fileversion/20201101-081529/qgis310/somap310_lk/lk.txt/dashboard/index.html)                 | somap_lk > lk.txt |                  7.9 | +17.9%                       |           14.9 | +123.3%                |           530   | +147.1%                 |            30 |            0 |          0 |       495.033 |          228 |          698 |         667.9 |        697.45 |           698 |      14.0318 |                380.307 |            5.72417 |     4631   |     4619.9 |     4598.3 |      33.8 |      25.7 |      14   |
| [qgis310-218file > somap218_lk > lk.txt](../results/details/compare-major-fileversion/20201101-081529/qgis310-218file/somap218_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |                  7.9 | +17.9%                       |           15.3 | +129.4%                |           580   | +170.4%                 |            30 |            0 |          0 |       508.433 |          227 |          672 |         650.5 |        667.05 |           672 |      13.986  |                379.066 |            5.70549 |     4637.6 |     4637.2 |     4636.8 |      35.3 |      26.8 |      18.3 |

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