# QGIS Benchmark summary compare-fg-oekorev_empty-bb (20220824-115556)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 09m 27s_

_Sample size per configuration 18_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-oekorev_empty-bb_20220824-115556_plot.html)

## Summary
| name          | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322_big   | Global  |              4.5 | +0.0%                    |             288.4 | +8639.4%                  |            0.1 | +166.0%                |             5.5 | +450.0%                 |            5 |           28 |                0 |            18 |           18 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |        100 |
| qgis218_small | Global  |              4.7 | +4.4%                    |               3.3 | +0.0%                     |            0   | +0.0%                  |             1   | +0.0%                   |            1 |           22 |                0 |            18 |           18 |     6926.6 |     6926.6 |     6926.6 |       1.9 |       1.9 |       1.9 |        100 |
| qgis322_small | Global  |              4.7 | +4.4%                    |               3.4 | +3.0%                     |            0.1 | +38.3%                 |             2   | +100.0%                 |            2 |           23 |                0 |            18 |           18 |     7150.9 |     7150.9 |     7150.9 |       6.9 |       6.9 |       6.9 |        100 |
| qgis218_big   | Global  |             10.3 | +128.9%                  |             188.9 | +5624.2%                  |           46.2 | +98229.8%              |          2395.5 | +239450.0%              |            1 |         6228 |                0 |            18 |           18 |    11213.5 |    10628.9 |     9825.1 |      61.6 |      36.9 |       3.2 |        100 |

## Aggregated
| name                                | group            |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------|------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218_small > somap218_fg_oekorev | somap_fg_oekorev |              4.7 | +0.0%                    |               3.3 | +0.0%                     |            0   | +0.0%                  |             1   | +0.0%                   |            1 |           22 |                0 |            18 |           18 |     6926.6 |     6926.6 |     6926.6 |       1.9 |       1.9 |       1.9 |        100 |
| qgis322_small > somap322_fg_oekorev | somap_fg_oekorev |              4.7 | +0.0%                    |               3.4 | +3.0%                     |            0.1 | +38.3%                 |             2   | +100.0%                 |            2 |           23 |                0 |            18 |           18 |     7150.9 |     7150.9 |     7150.9 |       6.9 |       6.9 |       6.9 |        100 |
| qgis322_big > somap322_fix          | somap_fix        |              4.5 | +0.0%                    |             288.4 | +52.7%                    |            0.1 | +0.0%                  |             5.5 | +0.0%                   |            5 |           28 |                0 |            18 |           18 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |        100 |
| qgis218_big > somap218_fix          | somap_fix        |             10.3 | +128.9%                  |             188.9 | +0.0%                     |           46.2 | +36872.0%              |          2395.5 | +43454.5%               |            1 |         6228 |                0 |            18 |           18 |    11213.5 |    10628.9 |     9825.1 |      61.6 |      36.9 |       3.2 |        100 |

## Detail
| name                                                                                                                                                                                                           | group                                      |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218_small > somap218_fg_oekorev > fg_oekorev_empty-bb.txt](../results/details/compare-fg-oekorev_empty-bb/20220824-115556/qgis218_small/somap218_fg_oekorev/fg_oekorev_empty-bb.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev_empty-bb.txt |              4.7 | +0.0%                    |               3.3 | +0.0%                     |            0   | +0.0%                  |             1   | +0.0%                   |            18 |           18 |        100 |       2.61111 |            1 |           22 |           5.8 |            22 |            22 |    409.091   |              176.225   |          158.203   |                0 |     6926.6 |     6926.6 |     6926.6 |       1.9 |       1.9 |       1.9 |
| [qgis322_small > somap322_fg_oekorev > fg_oekorev_empty-bb.txt](../results/details/compare-fg-oekorev_empty-bb/20220824-115556/qgis322_small/somap322_fg_oekorev/fg_oekorev_empty-bb.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev_empty-bb.txt |              4.7 | +0.0%                    |               3.4 | +3.0%                     |            0.1 | +38.3%                 |             2   | +100.0%                 |            18 |           18 |        100 |       3.61111 |            2 |           23 |           5.9 |            23 |            23 |    346.154   |              152.118   |          133.864   |                0 |     7150.9 |     7150.9 |     7150.9 |       6.9 |       6.9 |       6.9 |
| [qgis322_big > somap322_fix > fg_oekorev_empty-bb.txt](../results/details/compare-fg-oekorev_empty-bb/20220824-115556/qgis322_big/somap322_fix/fg_oekorev_empty-bb.txt/dashboard/index.html)                   | somap_fix > fg_oekorev_empty-bb.txt        |              4.5 | +0.0%                    |             288.4 | +52.7%                    |            0.1 | +0.0%                  |             5.5 | +0.0%                   |            18 |           18 |        100 |       6.94444 |            5 |           28 |          11.8 |            28 |            28 |    225       |               98.877   |           85.4736  |                0 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis218_big > somap218_fix > fg_oekorev_empty-bb.txt](../results/details/compare-fg-oekorev_empty-bb/20220824-115556/qgis218_big/somap218_fix/fg_oekorev_empty-bb.txt/dashboard/index.html)                   | somap_fix > fg_oekorev_empty-bb.txt        |             10.3 | +128.9%                  |             188.9 | +0.0%                     |           46.2 | +36872.0%              |          2395.5 | +43454.5%               |            18 |           18 |        100 |    2567.5     |            1 |         6228 |        6049.8 |          6228 |          6228 |      2.81294 |                1.21296 |            1.06859 |                0 |    11213.5 |    10628.9 |     9825.1 |      61.6 |      36.9 |       3.2 |

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
description: 'compare different versions of QGIS servers using the same settings and a working map request'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218_small:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_fg_oekorev:
        - fg_oekorev_empty-bb.txt

  qgis218_big:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_fix:
        - fg_oekorev_empty-bb.txt

  qgis322_small:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
      somap322_fg_oekorev:
        - fg_oekorev_empty-bb.txt

  qgis322_big:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
      somap322_fix:
        - fg_oekorev_empty-bb.txt
```
### parsed test configurations

```
description: compare different versions of QGIS servers using the same settings and
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
  qgis218_big:
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
      somap218_fix:
      - fg_oekorev_empty-bb.txt
    template: docker-compose-qgis-2
  qgis218_small:
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
      - fg_oekorev_empty-bb.txt
    template: docker-compose-qgis-2
  qgis322_big:
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
      somap322_fix:
      - fg_oekorev_empty-bb.txt
    template: docker-compose-qgis-3-nginx
  qgis322_small:
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
      somap322_fg_oekorev:
      - fg_oekorev_empty-bb.txt
    template: docker-compose-qgis-3-nginx

```