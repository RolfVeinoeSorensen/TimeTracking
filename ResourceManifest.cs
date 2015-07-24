using Orchard.UI.Resources;

namespace EM.TimeTracking
{
    public class ResourceManifest : IResourceManifestProvider
    {
        public void BuildManifests(ResourceManifestBuilder builder)
        {
            var manifest = builder.Add();
            //manifest.DefineStyle("TimeTracking").SetUrl("");
        }
    }
}