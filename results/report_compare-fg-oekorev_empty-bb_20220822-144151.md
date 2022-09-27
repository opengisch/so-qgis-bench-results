# QGIS Benchmark summary compare-fg-oekorev_empty-bb (20220822-144151)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 08m 20s_

_Sample size per configuration 18_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-oekorev_empty-bb_20220822-144151_plot.html)

## Summary
| name          | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218_small | Global  |              4.7 | +0.0%                    |               3   | +15.4%                    |            0.1 | +0.0%                  |               1 | +0.0%                   |            1 |           25 |                0 |            18 |           18 |     5781   |     5781   |     5781   |       0.7 |       0.7 |       0.7 |        100 |
| qgis322_big   | Global  |              4.8 | +2.1%                    |             265.8 | +10123.1%                 |            0.1 | +174.0%                |               6 | +500.0%                 |            5 |           29 |                0 |            18 |           18 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |        100 |
| qgis322_small | Global  |              4.9 | +4.3%                    |               2.6 | +0.0%                     |            0.1 | +40.0%                 |               3 | +200.0%                 |            2 |           23 |                0 |            18 |           18 |     6541.9 |     6541.9 |     6541.9 |       6.4 |       6.4 |       6.4 |        100 |
| qgis218_big   | Global  |              5   | +6.4%                    |             150.4 | +5684.6%                  |            1.1 | +2160.0%               |               1 | +0.0%                   |            1 |         1102 |                0 |            18 |           18 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |        100 |

## Aggregated
| name                                | group            |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------|------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218_small > somap218_fg_oekorev | somap_fg_oekorev |              4.7 | +0.0%                    |               3   | +15.4%                    |            0.1 | +0.0%                  |               1 | +0.0%                   |            1 |           25 |                0 |            18 |           18 |     5781   |     5781   |     5781   |       0.7 |       0.7 |       0.7 |        100 |
| qgis322_small > somap318_fg_oekorev | somap_fg_oekorev |              4.9 | +4.3%                    |               2.6 | +0.0%                     |            0.1 | +40.0%                 |               3 | +200.0%                 |            2 |           23 |                0 |            18 |           18 |     6541.9 |     6541.9 |     6541.9 |       6.4 |       6.4 |       6.4 |        100 |
| qgis322_big > somap318_fix          | somap_fix        |              4.8 | +0.0%                    |             265.8 | +76.7%                    |            0.1 | +0.0%                  |               6 | +500.0%                 |            5 |           29 |                0 |            18 |           18 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |        100 |
| qgis218_big > somap218_fix          | somap_fix        |              5   | +4.2%                    |             150.4 | +0.0%                     |            1.1 | +724.8%                |               1 | +0.0%                   |            1 |         1102 |                0 |            18 |           18 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |        100 |

## Detail
| name                                                                                                                                                                                                           | group                                      |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218_small > somap218_fg_oekorev > fg_oekorev_empty-bb.txt](../results/details/compare-fg-oekorev_empty-bb/20220822-144151/qgis218_small/somap218_fg_oekorev/fg_oekorev_empty-bb.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev_empty-bb.txt |              4.7 | +0.0%                    |               3   | +15.4%                    |            0.1 | +0.0%                  |               1 | +0.0%                   |            18 |           18 |        100 |       2.77778 |            1 |           25 |           5.2 |            25 |            25 |     391.304  |              168.563   |          151.325   |                0 |     5781   |     5781   |     5781   |       0.7 |       0.7 |       0.7 |
| [qgis322_small > somap318_fg_oekorev > fg_oekorev_empty-bb.txt](../results/details/compare-fg-oekorev_empty-bb/20220822-144151/qgis322_small/somap318_fg_oekorev/fg_oekorev_empty-bb.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev_empty-bb.txt |              4.9 | +4.3%                    |               2.6 | +0.0%                     |            0.1 | +40.0%                 |               3 | +200.0%                 |            18 |           18 |        100 |       3.88889 |            2 |           23 |           5.9 |            23 |            23 |     352.941  |              155.101   |          136.489   |                0 |     6541.9 |     6541.9 |     6541.9 |       6.4 |       6.4 |       6.4 |
| [qgis322_big > somap318_fix > fg_oekorev_empty-bb.txt](../results/details/compare-fg-oekorev_empty-bb/20220822-144151/qgis322_big/somap318_fix/fg_oekorev_empty-bb.txt/dashboard/index.html)                   | somap_fix > fg_oekorev_empty-bb.txt        |              4.8 | +0.0%                    |             265.8 | +76.7%                    |            0.1 | +0.0%                  |               6 | +500.0%                 |            18 |           18 |        100 |       7.61111 |            5 |           29 |          12.8 |            29 |            29 |     200      |               87.8906  |           75.9766  |                0 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis218_big > somap218_fix > fg_oekorev_empty-bb.txt](../results/details/compare-fg-oekorev_empty-bb/20220822-144151/qgis218_big/somap218_fix/fg_oekorev_empty-bb.txt/dashboard/index.html)                   | somap_fix > fg_oekorev_empty-bb.txt        |              5   | +4.2%                    |             150.4 | +0.0%                     |            1.1 | +724.8%                |               1 | +0.0%                   |            18 |           18 |        100 |      62.7778  |            1 |         1102 |         116.5 |          1102 |          1102 |      16.3339 |                7.03621 |            6.20498 |                0 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |

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
      somap318_fg_oekorev:
        - fg_oekorev_empty-bb.txt

  qgis322_big:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
      somap318_fix:
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
      somap318_fix:
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
      somap318_fg_oekorev:
      - fg_oekorev_empty-bb.txt
    template: docker-compose-qgis-3-nginx

```