import { NexusClient, Resource } from '@bbp/nexus-sdk';

export default<T>(pluginInput: {ref: HTMLElement, nexusClient: NexusClient, resource: Resource<T>}) => {
  pluginInput.ref.innerHTML = "here begins the new plugin!"  
  return () => {
    console.log('called when plugin removed!');
    // optional callback when your plugin is unmounted from the page
  };
};