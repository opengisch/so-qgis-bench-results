# QGIS Benchmark summary compare-major-fileversion (20201111-012717)


compare different version of QGIS servers using the same settings

_run completed in 00h 03m 02s_

_Sample size per configuration 30_
## Summary plot
An interactive summary plot can be found [here](report_compare-major-fileversion_20201111-012717_plot.html)

## Summary
| name            | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-----------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-310file | Global  |              6.4 | +0.0%                    |               0.6 | +0.0%                     |            6.5 | +5.1%                  |           220.5 | +2.6%                   |          128 |          313 |              0.8 |            30 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis316-218file | Global  |              6.5 | +1.6%                    |               0.7 | +16.7%                    |            6.2 | +0.0%                  |           215   | +0.0%                   |          116 |          299 |              0.8 |            30 |            0 |     2922.5 |     2904.6 |     2886.7 |      30.7 |      19.2 |       7.7 |          0 |
| qgis316         | Global  |              6.6 | +3.1%                    |               0.7 | +16.7%                    |            6.7 | +7.6%                  |           219.5 | +2.1%                   |          142 |          319 |              0.8 |            30 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis310-218file | Global  |              7.5 | +17.2%                   |               0.9 | +50.0%                    |           14.4 | +132.2%                |           520   | +141.9%                 |          232 |          669 |              0.8 |            30 |            0 |     2842.6 |     2842.6 |     2842.6 |       7.8 |       7.8 |       7.8 |          0 |
| qgis310         | Global  |              7.6 | +18.7%                   |               0.9 | +50.0%                    |           14.8 | +138.4%                |           538   | +150.2%                 |          238 |          668 |              0.8 |            30 |            0 |     2846.2 |     2836.4 |     2817.1 |      28.3 |      14.3 |       0.2 |          0 |

## Aggregated
| name                          | group    |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------|----------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-310file > somap310_lk | somap_lk |              6.4 | +0.0%                    |               0.6 | +0.0%                     |            6.5 | +5.1%                  |           220.5 | +2.6%                   |          128 |          313 |              0.8 |            30 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis316-218file > somap218_lk | somap_lk |              6.5 | +1.6%                    |               0.7 | +16.7%                    |            6.2 | +0.0%                  |           215   | +0.0%                   |          116 |          299 |              0.8 |            30 |            0 |     2922.5 |     2904.6 |     2886.7 |      30.7 |      19.2 |       7.7 |          0 |
| qgis316 > somap316_lk         | somap_lk |              6.6 | +3.1%                    |               0.7 | +16.7%                    |            6.7 | +7.6%                  |           219.5 | +2.1%                   |          142 |          319 |              0.8 |            30 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis310-218file > somap218_lk | somap_lk |              7.5 | +17.2%                   |               0.9 | +50.0%                    |           14.4 | +132.2%                |           520   | +141.9%                 |          232 |          669 |              0.8 |            30 |            0 |     2842.6 |     2842.6 |     2842.6 |       7.8 |       7.8 |       7.8 |          0 |
| qgis310 > somap310_lk         | somap_lk |              7.6 | +18.7%                   |               0.9 | +50.0%                    |           14.8 | +138.4%                |           538   | +150.2%                 |          238 |          668 |              0.8 |            30 |            0 |     2846.2 |     2836.4 |     2817.1 |      28.3 |      14.3 |       0.2 |          0 |

## Detail
| name                                                                                                                                                           | group             |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316-310file > somap310_lk > lk.txt](../results/details/compare-major-fileversion/20201111-012717/qgis316-310file/somap310_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |              6.4 | +0.0%                    |               0.6 | +0.0%                     |            6.5 | +5.1%                  |           220.5 | +2.6%                   |            30 |            0 |          0 |       217.6   |          128 |          313 |         285.1 |        303.1  |           313 |      26.7142 |                723.987 |           10.8978  |              0.8 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis316-218file > somap218_lk > lk.txt](../results/details/compare-major-fileversion/20201111-012717/qgis316-218file/somap218_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |              6.5 | +1.6%                    |               0.7 | +16.7%                    |            6.2 | +0.0%                  |           215   | +0.0%                   |            30 |            0 |          0 |       207.033 |          116 |          299 |         271.6 |        292.4  |           299 |      27.7521 |                752.116 |           11.3213  |              0.8 |     2922.5 |     2904.6 |     2886.7 |      30.7 |      19.2 |       7.7 |
| [qgis316 > somap316_lk > lk.txt](../results/details/compare-major-fileversion/20201111-012717/qgis316/somap316_lk/lk.txt/dashboard/index.html)                 | somap_lk > lk.txt |              6.6 | +3.1%                    |               0.7 | +16.7%                    |            6.7 | +7.6%                  |           219.5 | +2.1%                   |            30 |            0 |          0 |       222.767 |          142 |          319 |         298.6 |        314.05 |           319 |      26.4085 |                715.702 |           10.7731  |              0.8 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis310-218file > somap218_lk > lk.txt](../results/details/compare-major-fileversion/20201111-012717/qgis310-218file/somap218_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |              7.5 | +17.2%                   |               0.9 | +50.0%                    |           14.4 | +132.2%                |           520   | +141.9%                 |            30 |            0 |          0 |       480.767 |          232 |          669 |         639.5 |        660.2  |           669 |      14.437  |                391.288 |            5.88945 |              0.8 |     2842.6 |     2842.6 |     2842.6 |       7.8 |       7.8 |       7.8 |
| [qgis310 > somap310_lk > lk.txt](../results/details/compare-major-fileversion/20201111-012717/qgis310/somap310_lk/lk.txt/dashboard/index.html)                 | somap_lk > lk.txt |              7.6 | +18.7%                   |               0.9 | +50.0%                    |           14.8 | +138.4%                |           538   | +150.2%                 |            30 |            0 |          0 |       493.6   |          238 |          668 |         642.8 |        661.4  |           668 |      14.3198 |                388.113 |            5.84166 |              0.8 |     2846.2 |     2836.4 |     2817.1 |      28.3 |      14.3 |       0.2 |

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
      QGIS_VERSION: '3.10-ubuntu'
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
      QGIS_VERSION: '3.16-ubuntu'
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
      QGIS_VERSION: 3.10-ubuntu
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
      QGIS_VERSION: 3.10-ubuntu
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
      QGIS_VERSION: 3.16-ubuntu
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
      QGIS_VERSION: 3.16-ubuntu
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
      QGIS_VERSION: 3.16-ubuntu
    inherit: qgis316
    path-prefix: ogc
    projects:
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```