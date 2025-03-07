"""load clip"""

from functools import lru_cache
import torch
import clip
import warnings
warnings.filterwarnings("ignore")


def load_open_clip(clip_model, use_jit=True, device="cuda", checkpoint=None):
    import open_clip  # pylint: disable=import-outside-toplevel

    pretrained = dict(open_clip.list_pretrained())
    if not checkpoint:
        checkpoint = pretrained[clip_model]
    model, _, preprocess = open_clip.create_model_and_transforms(
        clip_model, pretrained=checkpoint, device=device, jit=use_jit
    )
    return model, preprocess


@lru_cache(maxsize=None)
def load_clip(clip_model="ViT-B/32", use_jit=True, checkpoint=None):
    device = "cuda" if torch.cuda.is_available() else "cpu"
    if clip_model.startswith("open_clip:"):
        clip_model = clip_model[len("open_clip:") :]
        return load_open_clip(clip_model, use_jit, device, checkpoint)
    else:
        model, preprocess = clip.load(clip_model, device=device, jit=use_jit)
    return model, preprocess
