# QGIS Benchmark summary compare-fg-oekorev (20220502-104229)


compare different version of QGIS servers using the same settings and a working map request

_run completed in 00h 05m 03s_

_Sample size per configuration 36_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-oekorev_20220502-104229_plot.html)

## Summary
| name    | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 | Global  |             11.5 | +0.0%                    |              99.8 | +0.0%                     |           12.9 | +0.0%                  |           323.5 | +2.1%                   |          170 |         2553 |              5.4 |            36 |            0 |     7425.7 |    7144.4  |     6417.9 |      26.2 |     12.45 |       0.1 |          0 |
| qgis322 | Global  |             19.8 | +72.2%                   |             143   | +43.3%                    |           57.1 | +341.1%                |           317   | +0.0%                   |          150 |        11029 |              5.9 |            36 |            0 |     8894.4 |    8684.85 |     7183.6 |      24.9 |      8.4  |       2.8 |          0 |

## Aggregated
| name                          | group            |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------|------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322 > somap318_fg_oekorev | somap_fg_oekorev |              4.9 | +0.0%                    |               0.2 | +0.0%                     |            2.6 | +0.0%                  |           118   | +0.0%                   |           75 |          331 |              3   |            18 |            0 |     8721   |     8721   |     8721   |      10.8 |      10.8 |      10.8 |          0 |
| qgis218 > somap218_fg_oekorev | somap_fg_oekorev |              5.6 | +14.3%                   |               0.3 | +50.0%                    |            3.8 | +45.7%                 |           133.5 | +13.1%                  |           69 |         1248 |              2.7 |            18 |            0 |     7425.7 |     7406.2 |     7386.7 |      13.1 |      11.7 |      10.2 |          0 |
| qgis218 > somap218_fix        | somap_fix        |              5.9 | +0.0%                    |              99.5 | +0.0%                     |            9.1 | +0.0%                  |           190   | +0.0%                   |          101 |         1305 |              2.7 |            18 |            0 |     7347.2 |     6882.6 |     6417.9 |      26.2 |      13.2 |       0.1 |          0 |
| qgis322 > somap318_fix        | somap_fix        |             14.9 | +152.5%                  |             142.8 | +43.5%                    |           54.4 | +498.3%                |           199   | +4.7%                   |           75 |        10698 |              2.9 |            18 |            0 |     8894.4 |     8648.7 |     7183.6 |      24.9 |       6   |       2.8 |          0 |

## Detail
| name                                                                                                                                                                    | group                             |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis322 > somap318_fg_oekorev > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220502-104229/qgis322/somap318_fg_oekorev/fg_oekorev.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev.txt |              4.9 | +0.0%                    |               0.2 | +0.0%                     |            2.6 | +0.0%                  |           118   | +0.0%                   |            18 |            0 |          0 |       146.5   |           75 |          331 |         315.7 |           331 |           331 |     24.3243  |               4136.74  |           9.40667  |              3   |     8721   |     8721   |     8721   |      10.8 |      10.8 |      10.8 |
| [qgis218 > somap218_fg_oekorev > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220502-104229/qgis218/somap218_fg_oekorev/fg_oekorev.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev.txt |              5.6 | +14.3%                   |               0.3 | +50.0%                    |            3.8 | +45.7%                 |           133.5 | +13.1%                  |            18 |            0 |          0 |       213.389 |           69 |         1248 |         481.2 |          1248 |          1248 |     10.1294  |               1567.33  |           3.91724  |              2.7 |     7425.7 |     7406.2 |     7386.7 |      13.1 |      11.7 |      10.2 |
| [qgis218 > somap218_fix > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220502-104229/qgis218/somap218_fix/fg_oekorev.txt/dashboard/index.html)               | somap_fix > fg_oekorev.txt        |              5.9 | +0.0%                    |              99.5 | +0.0%                     |            9.1 | +0.0%                  |           190   | +0.0%                   |            18 |            0 |          0 |       505.333 |          101 |         1305 |        1255.5 |          1305 |          1305 |      9.71922 |               1503.86  |           3.69217  |              2.7 |     7347.2 |     6882.6 |     6417.9 |      26.2 |      13.2 |       0.1 |
| [qgis322 > somap318_fix > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220502-104229/qgis322/somap318_fix/fg_oekorev.txt/dashboard/index.html)               | somap_fix > fg_oekorev.txt        |             14.9 | +152.5%                  |             142.8 | +43.5%                    |           54.4 | +498.3%                |           199   | +4.7%                   |            18 |            0 |          0 |      3023.56  |           75 |        10698 |       10606.2 |         10698 |         10698 |      1.6476  |                275.713 |           0.625894 |              2.9 |     8894.4 |     8648.7 |     7183.6 |      24.9 |       6   |       2.8 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/mkuhn/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/mkuhn/so-qgis-bench/results

```
### test configurations

```
description: 'compare different version of QGIS servers using the same settings and a working map request'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_fix:
        - fg_oekorev.txt
      somap218_fg_oekorev:
        - fg_oekorev.txt

  qgis322:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
      somap318_fix:
        - fg_oekorev.txt
      somap318_fg_oekorev:
        - fg_oekorev.txt
```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings and
  a working map request
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_fg_oekorev:
      - fg_oekorev.txt
      somap218_fix:
      - fg_oekorev.txt
    template: docker-compose-qgis-2
  qgis322:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.22'
    inherit: base
    path-prefix: ogc
    projects:
      somap318_fg_oekorev:
      - fg_oekorev.txt
      somap318_fix:
      - fg_oekorev.txt
    template: docker-compose-qgis-3-nginx

```