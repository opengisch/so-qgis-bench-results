# QGIS Benchmark summary compare-filesize (20201009-123812)


compare the effect of different QGIS project file size in QGIS 3.10

_run completed in 222.14999999999998s_

## Summary
| name              |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|-------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-smallfile |       220.79 |        0    |            72 |            0 |          0 |
| qgis310-bigfile   |      1322.94 |      499.18 |            72 |            0 |          0 |

## Aggregated
| name                                            |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|-------------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-smallfile > somap310_lk                 |        17.88 |        0    |            30 |            0 |          0 |
| qgis310-smallfile > somap310_grundplanav_sw     |        91.6  |      412.3  |            20 |            0 |          0 |
| qgis310-smallfile > somap310_grundplanav_farbig |       111.31 |      522.54 |            22 |            0 |          0 |
| qgis310-bigfile > somap310_fix                  |      1322.94 |     7298.99 |            72 |            0 |          0 |

## Detail
| name                                                                                                                                                                                          |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|
| [qgis310-smallfile > somap310_lk > lk.txt](../results/details/compare-filesize/20201009-123812/qgis310-smallfile/somap310_lk/lk.txt/dashboard/index.html)                                     |        17.88 |        0    |            30 |            0 |          0 |       596.067 |           697   |          259 |          791 |         766.5 |         781.1 |           791 |    12.22     |               331.232  |           4.98504  |
| [qgis310-smallfile > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201009-123812/qgis310-smallfile/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       |        91.6  |      412.3  |            20 |            0 |          0 |      4579.9   |          4575.5 |         2267 |         6033 |        5978.1 |        6030.3 |          6033 |     1.64853  |               512.936  |           0.690323 |
| [qgis310-smallfile > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-filesize/20201009-123812/qgis310-smallfile/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) |       111.31 |      522.54 |            22 |            0 |          0 |      5059.32  |          5284.5 |         2813 |         6608 |        6110.7 |        6551   |          6608 |     1.62782  |               212.254  |           0.693674 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201009-123812/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                 |       388.44 |     2072.48 |            20 |            0 |          0 |     19422.2   |         20789.5 |         2010 |        27955 |       27646.9 |       27939.8 |         27955 |     0.394719 |               192.228  |           0.161048 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-filesize/20201009-123812/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                       |       429.44 |     2301.79 |            30 |            0 |          0 |     14314.5   |         16748.5 |         1925 |        16939 |       16912.5 |       16933.5 |         16939 |     0.590656 |                16.0102 |           0.241531 |
| [qgis310-bigfile > somap310_fix > av_f.txt](../results/details/compare-filesize/20201009-123812/qgis310-bigfile/somap310_fix/av_f.txt/dashboard/index.html)                                   |       505.06 |     2724.72 |            22 |            0 |          0 |     22957.1   |         26330.5 |         3294 |        30483 |       30051.8 |       30419.4 |         30483 |     0.3577   |                46.8928 |           0.147189 |

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