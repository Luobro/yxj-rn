// ts 声明文件，用于代码检查

import React, { Component } from 'react';

declare module 'React' {
  interface Component {
    $api: any
  }
}