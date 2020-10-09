# QGIS Benchmark summary compare-filesize (20201008-225025)

_run completed in 225.57s_

## Summary
| name              |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|-------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-smallfile |       222.73 |        0    |            72 |            0 |          0 |
| qgis310-bigfile   |      1347.05 |      504.79 |            72 |            0 |          0 |

## Aggregated
| name                                            |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|-------------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-smallfile > somap310_lk                 |        17.63 |        0    |            30 |            0 |          0 |
| qgis310-smallfile > somap310_grundplanav_sw     |        92.79 |      426.32 |            20 |            0 |          0 |
| qgis310-smallfile > somap310_grundplanav_farbig |       112.31 |      537.04 |            22 |            0 |          0 |
| qgis310-bigfile > somap310_fix                  |      1347.05 |     7540.67 |            72 |            0 |          0 |

## Detail
| name                                                                                                                                                                                          |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|
| [qgis310-smallfile > somap310_lk > lk.txt](../results/details/compare-filesize/20201008-225025/qgis310-smallfile/somap310_lk/lk.txt/dashboard/index.html)                                     |        17.63 |        0    |            30 |            0 |          0 |       587.767 |           674   |          251 |          792 |         764.5 |        781    |           792 |    12.2951   |               333.269  |           5.01569  |
| [qgis310-smallfile > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201008-225025/qgis310-smallfile/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       |        92.79 |      426.32 |            20 |            0 |          0 |      4639.4   |          4641.5 |         2283 |         6129 |        6054.9 |       6125.35 |          6129 |     1.62853  |               506.712  |           0.681948 |
| [qgis310-smallfile > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-filesize/20201008-225025/qgis310-smallfile/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) |       112.31 |      537.04 |            22 |            0 |          0 |      5104.91  |          5346   |         2743 |         6654 |        6164.3 |       6589.95 |          6654 |     1.60549  |               209.342  |           0.684157 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201008-225025/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                 |       391.04 |     2118.04 |            20 |            0 |          0 |     19551.9   |         20604.5 |         4467 |        28109 |       27936.8 |      28100.5  |         28109 |     0.391942 |               190.876  |           0.159915 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-filesize/20201008-225025/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                       |       431.95 |     2350.09 |            30 |            0 |          0 |     14398.4   |         16902   |         2034 |        17193 |       17161.9 |      17180.3  |         17193 |     0.586717 |                15.9035 |           0.23992  |
| [qgis310-bigfile > somap310_fix > av_f.txt](../results/details/compare-filesize/20201008-225025/qgis310-bigfile/somap310_fix/av_f.txt/dashboard/index.html)                                   |       524.06 |     2872.55 |            22 |            0 |          0 |     23821.1   |         27215.5 |         3631 |        31558 |       31529.2 |      31556.2  |         31558 |     0.346359 |                45.406  |           0.142522 |

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
description: 'compare the effect of different QGIS project file size in QGIS 3.10'

test-cases:

  qgis310-bigfile:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_MAX_CACHE_LAYERS: '100'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_fix:
        - lk.txt
        - av_f.txt
        - av_sw.txt

  qgis310-smallfile:
    inherit: qgis310-bigfile
    projects:
      somap310_lk:
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f.txt
      somap310_grundplanav_sw:
        - av_sw.txt

```
### parsed test configurations

```
description: compare the effect of different QGIS project file size in QGIS 3.10
test-cases:
  qgis310-bigfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-smallfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```